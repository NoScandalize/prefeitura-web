import Link from "next/link";

interface HomeButtonProps {
  text: string
  href: string
  className?: string
}

export function HomeButton({ text, href, className }: HomeButtonProps) {
    return (
        <li>
          <Link href={href} className={`border-2 rounded-md pt-2 pb-2 pl-5 pr-5 border-zinc-800 hover:text-black hover:bg-white hover:border-black transition-colors ${className}`}>{text}</Link>
        </li>
    )
}