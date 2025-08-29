export function Header() {
    return (
        <header className="border-b-1 border-zinc-600 flex-row justify-around t-0 sticky top-0 bg-black">
          <nav className="flex mx-auto pr-10 pl-10 pb-5 pt-5 justify-between">
            <a href="./">
              <img src="logo.svg" alt="logo" width="100px" />
            </a>
            <ul className="flex gap-5">
              <li>
                <a href="">Lista de Obras</a>
              </li>
              <li>
                <a href="">Sobre o projeto</a>
              </li>
              <li>
                <a href="">Equipe</a>
              </li>
            </ul>
          </nav>
        </header>
    )
}