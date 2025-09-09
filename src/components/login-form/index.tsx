import Link from "next/link";

export function LoginForm() {
    return(
        <div className="flex justify-center">
            <form action="" className="flex-col border-2 rounded-xl border-zinc-800 mt-30">
                <div className="flex flex-col gap-10 pl-10 pr-10">
                    <h1 className="flex justify-center pt-10 pb-5 font-sans font-bold text-2xl">Login Form</h1>
                    <div>
                        <label htmlFor="email"></label>
                        <input type="text" placeholder="Digite seu email" name="email" id="email" className="pb-2 pt-2 border-b-2 border-zinc-800 pr-35"/>
                    </div>
                    <div>
                        <label htmlFor="password"></label>
                        <input type="password" placeholder="Digite sua senha" name="password" id="password" className="pb-2 pt-2 text-left border-b-2 border-zinc-800 pr-35"/>
                    </div>
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