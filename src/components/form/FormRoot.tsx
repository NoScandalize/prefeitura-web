import { ReactNode } from "react"

interface FormRootProps {
    title: string,
    children: ReactNode
}


export function FormRoot({ title, children }: FormRootProps) {
    return (
        <div className="flex justify-center">
            <form action="" method="post" className="flex-col border-2 rounded-xl border-zinc-800">
                <div className="flex flex-col gap-10 pl-10 pr-10">
                    <h1 className="flex justify-center pt-10 pb-5 font-sans font-bold text-2xl">{title}</h1>
                    {children}
                </div>
            </form>
        </div>   
    )
}