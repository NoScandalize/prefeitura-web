import { ReactNode } from "react"

interface ProjectsRootProps {
    children: ReactNode
}

export function ProjectsRoot({ children }: ProjectsRootProps) {
    return (
        <div>
            <h1 className="pb-6 text-2xl">Lista de Obras</h1>
            {children}
        </div>
    )
}