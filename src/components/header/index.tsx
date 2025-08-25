export function Header() {
    return (
        <header className="border-b-1 border-zinc-400 flex-row justify-around">
          <div>
            <a href="/" className="font-serif text-3xl tracking-widest">PREF</a>
          </div>
          <nav className="flex mx-auto p-6 justify-end gap-5">
            <div>
              <a href="">Lista de Obras</a>
            </div>
            <div>
              <a href="">Sobre o projeto</a>
            </div>
            <div>
              <a href="">Equipe</a>
            </div>
          </nav>
        </header>
    )
}