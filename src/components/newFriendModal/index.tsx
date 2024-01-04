import { Text } from "@/styles/ui";
import * as S from "./style";
import CheckBox from "@/styles/ui/CheckBox";
import { CrossIcon } from "@/styles/svg";

interface Modal {
  closeMyModal(): void;
}

const NewFriendModal = ({ closeMyModal }: Modal) => {
  return (
    <S.Container>
      <S.CloseModalBtn onClick={closeMyModal}>
        <CrossIcon width={2} height={2} />
      </S.CloseModalBtn>
      <Text fontType="$Body2">새 친구 만나기</Text>
      <S.Contents>
        <S.Content>
          <Text fontType="$p1">친구 이름</Text>
          <S.Input placeholder="친구 이름을 입력해주세요." />
        </S.Content>
        <S.Content>
          <Text fontType="$p1">상태메세지</Text>
          <S.Input placeholder="친구의 상태메세지를 입력해주세요." />
        </S.Content>
        <S.Content>
          <Text fontType="$p1">친구의 성격</Text>
        </S.Content>
        <S.botRadioGrid>
          <CheckBox labels={["외향적인", "내향적인"]} />
          <CheckBox labels={["현실적인", "창의적인"]} />
          <CheckBox labels={["계획적인", "자유분방한"]} />
          <CheckBox labels={["감성적인", "이성적인"]} />
        </S.botRadioGrid>
      </S.Contents>
      <S.MakeFriendBtn> 친구 만나기</S.MakeFriendBtn>
    </S.Container>
  );
};

export default NewFriendModal;
