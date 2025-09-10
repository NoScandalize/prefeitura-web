import { HTMLInputTypeAttribute } from "react"

export type InputProps = {
    placeholder: string
    name: string
    type: HTMLInputTypeAttribute
}

export function Input({ placeholder, name, type } : InputProps) {
    return (
        <div className="w-80">
            <label htmlFor={name}>
                <input type={type} placeholder={placeholder} name={name} id={name} className="pb-2 pt-2 border-b-2 border-zinc-800 w-full"/>
            </label>
        </div>
    )
}