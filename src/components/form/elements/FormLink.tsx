import Link from "next/link";

interface FormLinkProps {
    text: string
    href: string
    className?: string
}

export function FormLink({ text, href, className }: FormLinkProps) {
    return (
        <div className="flex justify-center">
            <Link href={href} className={`pb-10 text-zinc-400 hover:text-zinc-100 ${className}`}>{text}</Link>
        </div>
    )
}