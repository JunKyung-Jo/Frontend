import { RecoilRoot } from "recoil";
import { QueryClientProvider, QueryClient } from "react-query";

import { GlobalStyle } from "@/styles/theme";

interface ProviderAttribute {
  children: React.ReactNode;
}

const queryClient = new QueryClient();

const Provider = ({ children }: ProviderAttribute) => {
  return (
    <RecoilRoot>
      <QueryClientProvider client={queryClient}>
        <GlobalStyle />
        {children}
      </QueryClientProvider>
    </RecoilRoot>
  );
};

export default Provider;
