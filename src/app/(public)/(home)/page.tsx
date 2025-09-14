import { Components } from "@/components";

export default function Home() {
  return (
    <Components.Layout.Main pageTitle="Home" >
      <Components.UI.Home.Root title="Bem-vindo ao InfraView!" description="Aqui você encontra um resumo de todas as obras, com status, links para documentos, fotos e páginas individuais." >
        <Components.UI.Home.Button text="Docs" href='/docs' />
        <Components.UI.Home.Button text="Obras" href='/obras' />
        <Components.UI.Home.Button text="Sobre" href='/about' />
      </Components.UI.Home.Root>
    </Components.Layout.Main>
  )
}