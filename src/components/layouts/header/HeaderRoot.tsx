import { Components } from "@/components"
import { ReactNode } from "react"

interface HeaderRootProps {
  children: ReactNode
}

export function HeaderRoot({ children }: HeaderRootProps) {
  return (
    <header className="sticky top-0 z-50 bg-black border-b border-zinc-800 h-12">
      <nav className="max-w-7xl mx-auto flex items-center justify-between h-full px-4">
        <Components.Layout.Header.Logo href="/" text="InfraView" ariaLabel="Página Inicial" />
        <ul className="flex items-center gap-4 text-sm font-medium text-zinc-200 h-full">
          {children}
        </ul>
      </nav>
    </header>
  )
}