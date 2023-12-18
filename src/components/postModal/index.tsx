import useModal from "@/hooks/useModal";
import * as S from "./style";
import { CrossIcon } from "@/styles/svg";
import CloseIcon from "@/styles/mysvg/closeIcon";

interface GenerateModalProps {
  closeMyModal: () => void;
}

const PostModal = ({ closeMyModal }: GenerateModalProps) => {
  return (
    <S.Container>
      <S.ModalTop>
        <div />
        <CloseIcon onClick={closeMyModal} />
      </S.ModalTop>
    </S.Container>
  );
};

export default PostModal;
