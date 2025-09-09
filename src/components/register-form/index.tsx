import Link from "next/link";

export function RegisterForm() {
    return(
        <div className="flex justify-center">
            <form action="" method="post" className="flex-col border-2 rounded-xl border-zinc-800 mt-12 mb-12" >
                <div className="flex flex-col gap-10 pl-10 pr-10">
                    <h1 className="flex justify-center pt-10 pb-5 font-sans font-bold text-2xl">Register Form</h1>
                    <div className="w-80">
                        <label htmlFor="username"></label>
                        <input type="text" placeholder="Digite um nome de usuário" name="username" id="username" className="pb-2 pt-2 border-b-2 border-zinc-800 w-full"/>
                    </div>
                    <div className="w-80">
                        <label htmlFor="email"></label>
                        <input type="email" placeholder="Digite seu email" name="email" id="email" className="pb-2 pt-2 border-b-2 border-zinc-800 w-full"/>
                    </div>
                    <div className="w-80">
                        <label htmlFor="password"></label>
                        <input type="password" placeholder="Digite sua senha" name="password" id="password" className="pb-2 pt-2 text-left border-b-2 border-zinc-800 w-full"/>
                    </div>
                    <div className="w-80">
                        <label htmlFor="confirmPassword"></label>
                        <input type="password" placeholder="Confirme sua senha" name="confirmPassword" id="confirmPassword" className="pb-2 pt-2 border-b-2 border-zinc-800 w-full"/>
                    </div>
                </div>
                <div className="flex justify-center bg-white text-black mt-10 ml-10 mr-10 mb-2 pt-3 pb-3 pl-10 pr-10 rounded-md font-semibold border cursor-pointer hover:bg-transparent hover:text-white border-zinc-800 duration-300">
                    <input type="submit" value="Cadastrar" />
                </div>
                <div className="flex justify-center pb-10 text-zinc-400">
                    <Link href="/signin" className="hover:text-zinc-100">Já possui conta? Entre aqui</Link>
                </div>
            </form>
        </div>   
    )
}