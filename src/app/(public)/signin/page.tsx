import { LoginForm } from "@/components/login-form";

export default function SignIn() {
  return (
    <div className="ml-50 mr-50 border-l border-r border-zinc-800 min-h-170 flex-col font-sans">
      <title>Entrar - InfraView</title>
      <LoginForm />
    </div>
  );
}