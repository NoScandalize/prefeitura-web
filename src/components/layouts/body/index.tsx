import { ReactNode } from "react";

interface BodyProps {
    children: ReactNode,
    pageTitle: string
}

export function Body({ children, pageTitle }: BodyProps) {
  return (
    <div className="ml-50 mr-50 border-l border-r border-zinc-800 font-sans flex items-center justify-center h-screen">
      <div>
        <title>{`${pageTitle} | InfraView`}</title>
        {children}
      </div>
    </div>
  );
}