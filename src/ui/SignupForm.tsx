"use client"

import { useRouter } from 'next/navigation'
import React, { useRef, useState, useEffect, FormEvent } from 'react'
import Link from 'next/link'
import toast from 'react-hot-toast'
import PhoneInput from "react-phone-number-input"
import flags from 'react-phone-number-input/flags';
import 'react-phone-number-input/style.css'
import { TextInput } from '.'

export default function SignupForm() {
  const [loading, setLoading] = useState<boolean>(false)
  const [phone, setPhone] = useState<string | undefined>('')
  const signupFormRef = useRef<HTMLFormElement | null>(null)
  const passwordRef = useRef<HTMLInputElement | null>(null)
  const confirmPasswordRef = useRef<HTMLInputElement | null>(null)
  const router = useRouter()

  useEffect(() => {

  }, [])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    if(passwordRef?.current?.value !== confirmPasswordRef?.current?.value) {
      toast.error(`Password do NOT match.`, {id: "802860"})
      setLoading(false)
      return;
    }
    try {

      toast.success(`Something went wrong. Please, try again`, {id: "802860"})
    } catch (error) {
      toast.error(`Something went wrong. Please, try again`, {id: "802860"})
    } finally {
      setLoading(false)
    }
  }

  return (
    <>
      <form ref={signupFormRef} onSubmit={handleSubmit} className="relative z-10 bg-white rounded-md p-5 md:p-10 flex flex-col justify-center max-w-lg w-full m-4">
        <h2 className="font-bold text-primary text-xl sm:text-2xl md:text-3xl py-2">Signup to Get Started</h2>
        <div className="flex flex-col py-5">
          <TextInput key={"80230"} type='text' id='firstname' label='First Name' className='py-2' error='Enter at least 3 characters' others={{ placeholder: "Olamide" }} />
          <TextInput key={'80231'} type='text' id='middlename' label='Middle Name' className='py-2' error='Enter at least 3 characters' others={{ required: false, minLength: 3, placeholder: "Adakwu" }} />
          <TextInput key={'80232'} type='text' id='lastname' label='Last Name' className='py-2' error='Enter at least 3 characters' others={{ minLength: 3, placeholder: "Ibrahim" }} />
          <TextInput key={'80233'} type='email' id='email' label='Email' className='py-2' error='Enter a valid email address' others={{ minLength: 3, placeholder: "olamiadaibrahim@email.com" }} />
          <TextInput key={'80234'} type='password' id='password' label='Password' className='py-2' error='Enter at least 6 characters' others={{ ref: passwordRef, minLength: 6, placeholder: "******" }} />
          <TextInput key={'80235'} type='password' id='verify-password' label='Confirm Password' className='py-2' error='Enter the same password as above' others={{ ref: confirmPasswordRef, minLength: 6, placeholder: "******" }} />
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
        </div>
        <button disabled={loading} type="submit" className="mt-2 py-2 px-5 text-white text-sm bg-primary border border-solid border-primary hover:bg-white hover:text-primary rounded-[2rem] cursor-pointer min-w-[5rem]">{loading ? 'Processing...' : 'Create Account'}</button>
        <Link href="/login" className="cursor-pointer text-center text-sm text-slate-500 py-2">Do you have an account already? Login</Link>
      </form>
    </>
  )
}
