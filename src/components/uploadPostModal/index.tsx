import { Text } from "@/styles/ui";
import * as S from "./style";
import CloseIcon from "@/styles/mysvg/closeIcon";
import ImageIcon from "@/styles/mysvg/imageIcon";

interface GenerateModalProps {
  closeMyModal: () => void;
}

const UploadPostModal = ({ closeMyModal }: GenerateModalProps) => {
  return (
    <S.Container>
      <S.ModalTop>
        <div />
        <S.Title>게시물 업로드</S.Title>
        <CloseIcon onClick={closeMyModal} />
      </S.ModalTop>
      <S.Wrapper>
        <S.UploadImageArea>
          <ImageIcon />
          <S.Description>게시물 이미지를 업로드 해주세요.</S.Description>
          <S.Button>컴퓨터에서 선택</S.Button>
        </S.UploadImageArea>
        <S.InputArea>
          <S.Input />
          <S.Input />
        </S.InputArea>
      </S.Wrapper>
    </S.Container>
  );
};

export default UploadPostModal;
