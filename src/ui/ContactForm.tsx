"use client"

import { useRouter } from 'next/navigation'
import React, { useRef, useState, useEffect } from 'react'
import Link from 'next/link'
import PhoneInput from "react-phone-number-input"
import flags from 'react-phone-number-input/flags';
import 'react-phone-number-input/style.css'
import { TextInput } from '.'
import toast from 'react-hot-toast'

export default function ContactForm() {
  const [loading, setLoading] = useState<boolean>(false)
  const contactFormRef = useRef<HTMLFormElement | null>(null)
  const [phone, setPhone] = useState<string | undefined>('')
  const router = useRouter()

  useEffect(() => {

    const formInputs = contactFormRef?.current?.querySelectorAll("input")
    formInputs?.forEach(input => {
      input.oninput = () => {
        console.log("Typing...")
        // input.classList.add("peer")
        if (input.value !== "") {
          input.classList.add("peer")
        }
        else {
          input.classList.remove("peer")
        }
      }
    })

  }, [])

  const handleContactSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if(phone === "" && phone.length < 11) {
      toast.error(`Invalid Phone Number.`, {id: "802860"})
      return;
    }
    setLoading(true)
    try {
      toast.success(`Message Sent. Thanks for reaching out.`, {id: "802860"})
    } catch (error) {
      toast.error(`Something went wrong. Please, try again`, {id: "802860"})
    } finally {
      setLoading(false)
    }
  }

  return (
    <>
      <form ref={contactFormRef} onSubmit={handleContactSubmit} className="relative z-10 bg-white rounded-md p-5 md:p-10 flex flex-col justify-center gap-2 max-w-lg w-full m-4">
        <h2 className="font-bold text-primary text-xl sm:text-2xl md:text-3xl py-2">Send us a Message</h2>
        <TextInput key={'80230'} type='text' id='fullname' label='Full Name' className='py-2' containerClassName='-mb-2' error='Enter at least 6 characters' others={{ required: true, minLength: 7, placeholder: "Ojonugwa Emofovwe" }} />
        <TextInput key={'80233'} type='email' id='email' label='Email' className='py-2' containerClassName='-mb-2' error='Enter a valid email address' others={{ required: true, minLength: 3, placeholder: "jumaioluwaseun@email.com" }} />
        <div className={`flex flex-col gap-1`}>
          <label htmlFor={'phone'} className="text-slate-600 text-sm">Phone</label>
          <div className="flex w-full gap-1 py-2 bg-transparent border-b border-solid border-b-slate-300 overflow-hidden">
            <PhoneInput
              onChange={(value) => setPhone(value)}
              placeholder={"Enter Phone Number"}
              international
              countries={["NG"]}
              withCountryCallingCode={true}
              key={234}
              defaultCountry='NG'
              style={{ outline: 0, width: '108%', fontSize: '0.875rem' }}
              countryCallingCodeEditable={false}
              value={phone}
              name="phone"
              flags={flags}
              limitMaxLength={true}
              smartCaret={false}
              className='w-full hover:border-primary/90 border-solid outline-none placeholder-opacity-70 text-slate-700 bg-transparent rounded-md p-0 flex-1'
            />
          </div>
        </div>
      <button disabled={loading} type="submit" className="mt-2 py-2 px-5 text-white text-sm bg-primary border border-solid border-primary hover:bg-white hover:text-primary rounded-[2rem] cursor-pointer min-w-[5rem]">{loading ? 'Processing...' : 'Send'}</button>
    </form >
    </>
  )
}
