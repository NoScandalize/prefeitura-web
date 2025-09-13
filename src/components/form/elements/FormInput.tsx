import { HTMLInputTypeAttribute } from "react"

export type FormInputProps = {
    placeholder: string
    name: string
    type: HTMLInputTypeAttribute,
    className?: string
}

export function FormInput({ placeholder, name, type, className } : FormInputProps) {
    return (
        <div>
            <label htmlFor={name}>
                <input type={type} placeholder={placeholder} name={name} id={name} className={`pb-2 pt-2 border-b-2 border-zinc-800 w-full ${className}`} />
            </label>
        </div>
    )
}