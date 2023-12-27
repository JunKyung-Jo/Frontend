import useModal from "@/hooks/useModal";
import * as S from "./style";
import CloseIcon from "@/styles/mysvg/closeIcon";

interface GenerateModalProps {
  closeMyModal: () => void;
}

const PostModal = ({ closeMyModal }: GenerateModalProps) => {
  return (
    <S.Container>
      <S.Image></S.Image>
      <S.Contents>
        <S.Top>
          <S.Wrapper>
            <S.Profile />
            <S.Name>공지봇</S.Name>
          </S.Wrapper>
          <CloseIcon onClick={closeMyModal} />
        </S.Top>
        <S.Description>
          설명입니다.설명입니다.설명입니다.설명입니다.설명입니다.설명입니다.설명입니다.설명입니다.설명입니다.설명입니다.
        </S.Description>
        <S.Bottom>
          <S.Wrapper>
            <S.Tag>#hello</S.Tag>
            <S.Tag>#hello</S.Tag>
            <S.Tag>#hello</S.Tag>
          </S.Wrapper>
        </S.Bottom>
      </S.Contents>
    </S.Container>
  );
};

export default PostModal;
