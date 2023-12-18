"use client";

import { RecoilRoot } from "recoil";
import { QueryClientProvider, QueryClient } from "react-query";

import { GlobalStyle } from "@/styles/theme";

interface ProviderAttribute {
  children: React.ReactNode;
}

const queryClient = new QueryClient({
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
