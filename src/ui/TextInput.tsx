"use client"
import React from 'react'

export default function TextInput({ containerClassName, className, id, label, type, others, error }: TextInputProps) {
    return (
        <label htmlFor={id} className={`block ${containerClassName}`}>
            <span className="block text-sm font-medium text-slate-500">{label}</span>
            <input {...others} type={type ? type : "text"} id={id} name={id} className={`w-full pb-1 -mt-1 text-sm text-slate-600 border-b border-solid border-b-slate-300 outline-none ${className}`} />
            <p className={`mb-1 invisible peer-invalid:visible text-pink-600 text-xs`}>{error ? error : "You must complete this field"}</p>
        </label>
        // <label htmlFor={id} className={`flex flex-col ${containerClassName}`}>
        //     {label ? <p className="text-sm text-slate-500">{label}</p> : ""}
        //     <input {...others} type={type ? type : "text"} id={id} name={id} className={`peer`} />
        //     <small className={`mt-2 invisible peer-invalid:visible text-pink-600 text-sm`}>{error ? error : "You must complete this field"}</small>
        // </label>
    )
}
