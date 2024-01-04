import { Text } from "@/styles/ui";
import * as S from "./style";

interface Modal {
  closeMyModal(): void;
}

const NewFriendModal = ({ closeMyModal }: Modal) => {
  return (
    <S.Container>
      <Text fontType="$Body1">새 친구 만나기</Text>
      <S.Contents>
        <S.Content>
          <Text fontType="$Body2">친구 이름</Text>
          <S.Input placeholder="친구 이름을 입력해주세요." />
        </S.Content>
        <S.Content>
          <Text fontType="$Body2">상태메세지</Text>
          <S.Input placeholder="친구의 상태메세지를 입력해주세요." />
        </S.Content>
        <S.Content>
          <Text fontType="$Body2">친구의 성격</Text>
        </S.Content>
      </S.Contents>
    </S.Container>
  );
};

export default NewFriendModal;
