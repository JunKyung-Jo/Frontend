import React, { useState } from "react";
import { Text } from "@/styles/ui";
import * as S from "./style";
import CheckBox from "@/styles/ui/CheckBox";
import { CrossIcon } from "@/styles/svg";
import { useRecoilValue } from "recoil";
import { CheckboxAtom } from "@/store/checkBox";
import { instance } from "@/apis/instance";

interface Modal {
  closeMyModal(): void;
}

interface FriendData {
  name: string;
  statusMessage: string;
  personalities: string[];
}

const NewFriendModal = async ({ closeMyModal }: Modal) => {
  const checkBox = useRecoilValue(CheckboxAtom);
  const [friendData, setFriendData] = useState<FriendData>({
    name: "",
    statusMessage: "",
    personalities: checkBox,
  });

  const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFriendData({
      ...friendData,
      name: event.target.value,
    });
  };

  const handleStatusMessageChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setFriendData({
      ...friendData,
      statusMessage: event.target.value,
    });
  };

  const handleMakeFriend = () => {
    closeMyModal();
  };

  return (
    <S.Container>
      <S.CloseModalBtn onClick={closeMyModal}>
        <CrossIcon width={2} height={2} />
      </S.CloseModalBtn>
      <Text fontType="$Body2">새 친구 만나기</Text>
      <S.Contents>
        <S.Content>
          <Text fontType="$p1">친구 이름</Text>
          <S.Input
            placeholder="친구 이름을 입력해주세요."
            value={friendData.name}
            onChange={handleNameChange}
          />
        </S.Content>
        <S.Content>
          <Text fontType="$p1">상태메세지</Text>
          <S.Input
            placeholder="친구의 상태메세지를 입력해주세요."
            value={friendData.statusMessage}
            onChange={handleStatusMessageChange}
          />
        </S.Content>
        <S.Content>
          <Text fontType="$p1">친구 성격</Text>
        </S.Content>
        <S.botRadioGrid>
          <CheckBox
            index={0}
            labels={["외향적인", "내향적인"]}
            data={["EXTROVERTED", "INTROVERTED"]}
          />
          <CheckBox
            index={1}
            labels={["현실적인", "창의적인"]}
            data={["REALISTIC", "CREATIVE"]}
          />
          <CheckBox
            index={2}
            labels={["계획적인", "자유분방한"]}
            data={["ORGANIZED", "EASYGOING"]}
          />
          <CheckBox
            index={3}
            labels={["감성적인", "이성적인"]}
            data={["SENSITIVE", "RATIONAL"]}
          />
        </S.botRadioGrid>
      </S.Contents>
      <S.MakeFriendBtn onClick={handleMakeFriend}> 친구 만나기</S.MakeFriendBtn>
    </S.Container>
  );
};

export default NewFriendModal;
