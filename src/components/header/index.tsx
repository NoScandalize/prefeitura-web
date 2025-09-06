import Image from "next/image"
import Link from "next/link"

export function Header() {
  return (
    <header className="sticky top-0 z-50 bg-black border-b border-zinc-800 h-12">
      <nav className="max-w-7xl mx-auto flex items-center justify-between h-full px-4">
        {/* Logo */}
        <Link href="/" aria-label="Página inicial" className="flex items-center h-full">
          <Image
            src="/logo.svg"
            alt="Logo"
            width={80}
            height={32}
            priority
          />
        </Link>

        {/* Navegação */}
        <ul className="flex items-center gap-4 text-sm font-medium text-zinc-200 h-full">
          <li className="flex items-center">
            <Link
              href="/obras"
              className="hover:text-white transition-colors"
            >
              Obras
            </Link>
          </li>
          <li className="flex items-center">
            <Link
              href="/sobre"
              className="hover:text-white transition-colors"
            >
              Sobre
            </Link>
          </li>
          <li className="flex items-center">
            <Link
              href="/equipe"
              className="hover:text-white transition-colors"
            >
              Equipe
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}