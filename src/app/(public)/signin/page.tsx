import { Components } from "@/components";

export default function SignIn() {
  return (
    <Components.Layout.Body pageTitle="Login">
      <Components.Form.Root title="Login Form">
        <Components.Form.Input name="email" type="email" placeholder="Digite o seu email" />
        <Components.Form.Input name="password" type="password" placeholder="Digite o sua senha" />
        <Components.Form.Button value="Entrar" />
        <Components.Form.Link text="Não possui conta? Cadastre-se" href="/register" />
      </Components.Form.Root>
    </Components.Layout.Body>
  );
}