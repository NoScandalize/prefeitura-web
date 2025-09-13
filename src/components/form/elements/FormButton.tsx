export type FormButtonProps = {
    value: string
}

export function FormButton({ value } : FormButtonProps) {
    return (
        <div className="flex justify-center">
            <input className=" bg-white text-black pt-3 pb-3 pl-35 pr-35 rounded-md font-semibold border cursor-pointer hover:bg-transparent hover:text-white border-zinc-800 duration-300" type="submit" value={value} />
        </div>
    )
}