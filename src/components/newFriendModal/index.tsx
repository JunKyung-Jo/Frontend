import { instance } from "@/apis/instance";
import { CrossIcon } from "@/styles/svg";
import { Text } from "@/styles/ui";
import CheckBox from "@/styles/ui/CheckBox";
import { useMutation } from "@tanstack/react-query";
import { ChangeEventHandler, useState } from "react";
import { queryClient } from "../common/provider";
import * as S from "./style";

interface Modal {
  closeMyModal(): void;
}

type FriendInformation = {
  data: {
    name: string;
    statusMessage: string;
    personalities: [string, string, string, string];
  };
  file: string;
};

const personalitiesMap = {
  외향적인: "EXTROVERTED",
  내향적인: "INTROVERTED",
  현실적인: "REALISTIC",
  창의적인: "CREATIVE",
  계획적인: "ORGANIZED",
  자유분방한: "EASYGOING",
  감성적인: "SENSITIVE",
  이성적인: "RATIONAL",
};

const NewFriendModal = ({ closeMyModal }: Modal) => {
  const [friendInformation, setFriendInformation] = useState<FriendInformation>(
    {
      data: {
        name: "",
        statusMessage: "",
        personalities: ["EXTROVERTED", "REALISTIC", "ORGANIZED", "SENSITIVE"],
      },
      file: "",
    }
  );

  const handleFileChange = (event: any) => {
    const selectedFile = event.target.files?.[0] || null;

    console.log(selectedFile);

    setFriendInformation({ ...friendInformation, file: selectedFile });
  };

  const handleInputChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    const { name, value } = e.target;

    setFriendInformation({
      ...friendInformation,
      data: {
        ...friendInformation.data,
        [name]: value,
      },
    });
  };

  console.log(friendInformation);

  const handleCheckBoxChange = (label: string, index: number) => {
    const newFriendInformation = friendInformation;
    newFriendInformation.data.personalities[index] =
      personalitiesMap[label as keyof typeof personalitiesMap];

    setFriendInformation(newFriendInformation);
  };

  const { mutate: createFriendMutate } = useMutation({
    mutationFn: async () => {
      const formData = new FormData();
      const { data, file } = friendInformation;

      formData.append(
        "data",
        new Blob([JSON.stringify(data)], {
          type: "application/json",
        })
      );

      if (file) {
        formData.append("file", file);
      }

      await instance.post("/friend/meet", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${localStorage.getItem("access-token") || ""}`,
        },
      });

      closeMyModal();
    },
    onSuccess() {
      queryClient.invalidateQueries({ queryKey: ["getMyFriend"] });
    },
  });

  return (
    <S.Container>
      <S.CloseModalBtn onClick={closeMyModal}>
        <CrossIcon width={2} height={2} />
      </S.CloseModalBtn>
      <Text fontType="$Body2">새 친구 만나기</Text>
      <S.Contents>
        <S.ImageInputContent>
          <S.ImageInput type="file" onChange={handleFileChange} />
          <S.Label htmlFor="file">프로필 이미지</S.Label>
        </S.ImageInputContent>
        <S.Content>
          <Text fontType="$p1">친구 이름</Text>
          <S.Input
            name="name"
            placeholder="친구 이름을 입력해주세요."
            onChange={handleInputChange}
          />
        </S.Content>
        <S.Content>
          <Text fontType="$p1">상태메세지</Text>
          <S.Input
            name="statusMessage"
            placeholder="친구의 상태메세지를 입력해주세요."
            onChange={handleInputChange}
          />
        </S.Content>
        <S.Content>
          <Text fontType="$p1">친구의 성격</Text>
        </S.Content>
        <S.botRadioGrid>
          <CheckBox
            onChange={(label) => handleCheckBoxChange(label, 0)}
            labels={["외향적인", "내향적인"]}
          />
          <CheckBox
            onChange={(label) => handleCheckBoxChange(label, 1)}
            labels={["현실적인", "창의적인"]}
          />
          <CheckBox
            onChange={(label) => handleCheckBoxChange(label, 2)}
            labels={["계획적인", "자유분방한"]}
          />
          <CheckBox
            onChange={(label) => handleCheckBoxChange(label, 3)}
            labels={["감성적인", "이성적인"]}
          />
        </S.botRadioGrid>
      </S.Contents>
      <S.MakeFriendBtn onClick={() => createFriendMutate()}>
        {" "}
        친구 만나기
      </S.MakeFriendBtn>
    </S.Container>
  );
};

export default NewFriendModal;
