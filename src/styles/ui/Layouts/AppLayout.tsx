"use client";

import { ReactNode } from "react";
import styled from "styled-components";

// import Header from "@/components/common/header";

interface AppLayoutProps {
  children: ReactNode;
}

const AppLayout = ({ children }: AppLayoutProps) => {
  return (
    <Container>
      {/* <Header /> */}
      {children}
    </Container>
  );
};

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  min-height: 100vh;

  display: flex;
  justify-content: center;

  box-sizing: border-box;

  position: relative;
`;

export default AppLayout;
