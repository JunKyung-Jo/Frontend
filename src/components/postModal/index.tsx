import useModal from "@/hooks/useModal";
import * as S from "./style";
import { CrossIcon } from "@/styles/svg";

interface GenerateModalProps {
  closeMyModal: () => void;
}

const PostModal = ({ closeMyModal }: GenerateModalProps) => {
  return (
    <S.Container>
      <S.ModalTop>
        <div />
        <CrossIcon width={3} height={3} onClick={closeMyModal} />
      </S.ModalTop>
    </S.Container>
  );
};

export default PostModal;
