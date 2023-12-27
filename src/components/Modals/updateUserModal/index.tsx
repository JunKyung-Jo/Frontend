import CloseIcon from "@/styles/mysvg/closeIcon";
import * as S from "./style";
import { Text } from "@/styles/ui";
import { useUserdataQuery } from "@/services/auth/query";
import { useState } from "react";

interface GenerateModalProps {
  closeMyModal: () => void;
  name: string;
  statusMsg: string;
}

const UpdateUser = ({ closeMyModal, name, statusMsg }: GenerateModalProps) => {
  const [userData, setUserData] = useState({
    userName: name,
    statusMessage: statusMsg,
  });

  //   console.log(userData);

  return (
    <S.Container>
      <S.Header>
        <div />
        <Text fontType="$Body3">프로필 수정하기</Text>
        <CloseIcon onClick={closeMyModal} />
      </S.Header>
      <S.Wrapper>
        <S.Input />
      </S.Wrapper>
      <S.Button>프로필 수정하기</S.Button>
    </S.Container>
  );
};

export default UpdateUser;
