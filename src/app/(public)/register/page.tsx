import { RegisterForm } from "@/components/register-form";

export default function Register() {
  return (
    <div className="ml-50 mr-50 border-l border-r border-zinc-800 min-h-170 flex-col font-sans">
      <title>Cadastrar - InfraView</title>
      <RegisterForm />
    </div>
  );
}