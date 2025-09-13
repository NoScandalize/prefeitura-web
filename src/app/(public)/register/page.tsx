import { Components } from '@/components'

export default function Register() {
  return (
    <Components.Layout.Body pageTitle='Register'>
      <Components.Form.Root title='Register Form' >
        <Components.Form.Input name='username' placeholder='Escolha um nome de usuário' type='text' />
        <Components.Form.Input name='email' placeholder='Digite um email' type='email' />
        <Components.Form.Input name='password' placeholder='Digite sua senha' type='password' />
        <Components.Form.Input name='confirmPassword' placeholder='Confirme sua senha' type='password' />
        <Components.Form.Button value='Cadastrar' />
        <Components.Form.Link text='Já possui conta? Entre aqui' href='/signin' />
      </Components.Form.Root>
    </Components.Layout.Body>
  );
}