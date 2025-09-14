import { ReactNode } from "react";

interface MainRootProps {
    children: ReactNode,
    pageTitle: string
}

export function Main({ children, pageTitle }: MainRootProps) {
  return (
    <div className="ml-50 mr-50 border-l border-r border-zinc-800 font-sans flex items-center justify-center h-screen">
      <div>
        <title>{`${pageTitle} | InfraView`}</title>
        {children}
      </div>
    </div>
  );
}