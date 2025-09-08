import Link from "next/link";

export default function Home() {
  return (
    <div className="ml-50 mr-50 border-l border-r border-zinc-800 min-h-170 flex-col font-sans">
      <title>Home - InfraView</title>
      <h1 className="text-7xl font-sans font-black p-auto text-center pt-50 text-shadow-sm text-shadow-white ">Bem-vindo ao InfraView!</h1>
      <p className="text-center text-xl m-30">Aqui você encontra um resumo de todas as obras, com status, links para documentos, fotos e páginas individuais.</p>
      <ul className="flex justify-center gap-5 font-sans font-semibold">
        <li>
          <Link href='/obras' className="border-2 rounded-md pt-2 pb-2 pl-5 pr-5 border-zinc-800 hover:text-black hover:bg-white hover:border-black transition-colors">Docs</Link>
        </li>
        <li>
          <Link href='/about' className="border-2 rounded-md pt-2 pb-2 pl-5 pr-5 border-zinc-800 hover:text-black hover:bg-white hover:border-black transition-colors">Obras</Link>
        </li>
        <li>
          <Link href='/equipe' className="border-2 rounded-md pt-2 pb-2 pl-5 pr-5 border-zinc-800 hover:text-black hover:bg-white hover:border-black transition-colors">Sobre</Link>
        </li>
      </ul>
    </div>
  )
}