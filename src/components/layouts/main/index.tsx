import { ReactNode } from "react";

interface MainRootProps {
    children: ReactNode,
    pageTitle: string
}

export function Main({ children, pageTitle }: MainRootProps) {
  return (
    <div className="border-l border-r border-zinc-800 font-sans flex flex-1 items-center justify-center mx-auto w-full max-w-6xl">
      <div>
        <title>{`${pageTitle} | InfraView`}</title>
        {children}
      </div>
    </div>
  );
}