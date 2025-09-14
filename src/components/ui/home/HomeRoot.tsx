import { title } from "process"
import { ReactNode } from "react"

interface HomeRootProps {
    title: string
    description: string
    children: ReactNode
}

export function HomeRoot({ title, description, children }: HomeRootProps) {
    return (
        <div>
            <h1 className="text-7xl font-sans font-black p-auto text-center pt-10 text-shadow-sm text-shadow-white ">{title}</h1>
            <p className="text-center text-xl m-30">{description}</p>
            <ul className="flex justify-center gap-5 font-sans font-semibold">
                {children}
            </ul>
        </div>
    )
}