"use client";

import { RecoilRoot } from "recoil";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";

import { GlobalStyle } from "@/styles/theme";

// 프로젝트 라이브러리에 필요한 요소들을 임포트하고 기본 설정을 해주는 컴포넌트입니다.
interface ProviderAttribute {
  children: React.ReactNode;
}

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: { refetchOnWindowFocus: false },
  },
});

const Provider = ({ children }: ProviderAttribute) => {
  return (
    <QueryClientProvider client={queryClient}>
      <RecoilRoot>
        <GlobalStyle />
        {children}
      </RecoilRoot>
    </QueryClientProvider>
  );
};

export default Provider;
