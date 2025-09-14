import Link from "next/link";

interface HeaderLogoProps {
    text: string
    href: string
    ariaLabel?: string
    className?: string
}

export function HeaderLogo({ text, href, ariaLabel, className }: HeaderLogoProps) {
    return (
        <div>
            <Link href={href} aria-label={ariaLabel} className={`flex items-center h-full text-xl font-sans font-black ${className}`}>{text}</Link>
        </div>
    )
}