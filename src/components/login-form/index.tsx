import Link from "next/link";
import { components } from "@/components";

export function LoginForm() {
    return(
        <div className="flex justify-center">
            <form action="" className="flex-col border-2 rounded-xl border-zinc-800 mt-30">
                <div className="flex flex-col gap-10 pl-10 pr-10">
                    <h1 className="flex justify-center pt-10 pb-5 font-sans font-bold text-2xl">Login Form</h1>
                    {components.form.Input({ 
                        placeholder: "Digite seu email",
                        name: "email",
                        type: "email" 
                    })}
                    {components.form.Input({ 
                        placeholder: "Digite sua senha",
                        name: "password",
                        type: "password" 
                    })}
                </div>
                <div className="flex justify-center bg-white text-black mt-10 ml-10 mr-10 mb-2 pt-3 pb-3 pl-10 pr-10 rounded-md font-semibold border cursor-pointer hover:bg-transparent hover:text-white border-zinc-800 duration-300">
                    <input type="submit" value="Entrar" />
                </div>
                <div className="flex justify-center pb-10 text-zinc-400">
                    <Link href="/register" className="hover:text-zinc-100">Não possui conta? Cadastre-se</Link>
                </div>
            </form>
        </div>   
    )
}