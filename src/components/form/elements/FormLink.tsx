import Link from "next/link";

interface FormLinkProps {
    text: string
    href: string
}

export function FormLink({ text, href }: FormLinkProps) {
    return (
        <div className="flex justify-center">
            <Link href={href} className="pb-10 text-zinc-400 hover:text-zinc-100">{text}</Link>
        </div>
    )
}