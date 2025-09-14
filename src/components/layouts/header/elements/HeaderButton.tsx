import Link from "next/link";

interface HeaderButtonProps {
    text: string
    href: string
    className?: string
}

export function HeaderButton({ text, href, className }: HeaderButtonProps) {
    return (
        <li className="flex items-center">
            <Link href={href} className={`hover:text-white transition-colors ${className}`} >{text}</Link>
        </li>
    )
}