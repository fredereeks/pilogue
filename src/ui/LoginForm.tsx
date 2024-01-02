"use client"

import { useRouter } from 'next/navigation'
import React, { useRef, useState, useEffect } from 'react'
import Link from 'next/link'
import { TextInput } from '.'

export default function LoginForm() {
  const [loading, setLoading] = useState<boolean>(false)
  const [showLoginForm, setShowLoginForm] = useState<boolean>(true)
  const loginFormRef = useRef<HTMLFormElement | null>(null)
  const resetFormRef = useRef<HTMLFormElement | null>(null)
  const router = useRouter()

  useEffect(() => {

    const formInputs = loginFormRef?.current?.querySelectorAll("input")
    formInputs?.forEach(input => {
      input.oninput = () => {
        console.log("Typing...")
        // input.classList.add("peer")
        if(input.value !== ""){
          input.classList.add("peer")
        }
        else{
          input.classList.remove("peer")
        }
      }
    })

  }, [])

  const handleLoginSubmit = async(e: React.FormEvent) => {
    e.preventDefault()

  }
  const handleResetSubmit = async(e: React.FormEvent) => {
    e.preventDefault()

  }

  return (
    <>
      {showLoginForm ?
        <form ref={loginFormRef} onSubmit={handleLoginSubmit} className="relative z-10 bg-white rounded-md p-5 md:p-10 flex flex-col justify-center gap-2 max-w-lg w-full m-4">
          <h2 className="font-bold text-primary text-xl sm:text-2xl md:text-3xl py-2">Login to get Access</h2>
          <TextInput key={'80233'} type='email' id='email' label='Email' className='py-2' containerClassName='-mb-2' error='Enter a valid email address' others={{ required: true, minLength: 3, placeholder: "olamiadaibrahim@email.com" }} />
          <TextInput key={'80234'} id='password' label='Password' className='py-2' containerClassName='-mb-2' error='Enter at least 6 characters' others={{ required: true, type: "password", minLength: 6, placeholder: "******" }} />
          <p onClick={() => setShowLoginForm(false)} className="cursor-pointer text-xs text-slate-500">Forgot Password? </p>
          <button disabled={loading} type="submit" className="mt-2 py-2 px-5 text-white text-sm bg-primary border border-solid border-primary hover:bg-white hover:text-primary rounded-[2rem] cursor-pointer min-w-[5rem]">{loading ? 'Processing...' : 'Login'}</button>
          <Link href="/signup" className="cursor-pointer text-center text-sm text-slate-500">Create an Account</Link>
        </form>
        :
        <form ref={resetFormRef} onSubmit={handleResetSubmit} className="relative z-10 bg-white rounded-md p-4 flex flex-col justify-center gap-2 max-w-md w-full m-4">
          <h2 className="font-bold text-primary text-xl sm:text-2xl md:text-3xl pt-2">Password Reset</h2>
          <p className="font-light text-slate-600 pb-2 text-sm">Enter your email to get a password reset Link</p>
          <label htmlFor="email" className="text-sm text-slate-500 mt-2">Email </label>
          <input type="text" name='email' required placeholder='e.g. registeredemail@mail.com' className="p-2 text-sm text-slate-600 border-b border-solid border-b-slate-300 outline-none" />
          <p onClick={() => setShowLoginForm(true)} className="cursor-pointer text-xs text-slate-500">Back to Login </p>
          <button disabled={loading} type="submit" className="mt-2 py-2 px-5 text-white text-sm bg-primary border border-solid border-primary hover:bg-white hover:text-primary rounded-[2rem] cursor-pointer min-w-[5rem]">{loading ? 'Processing...' : 'Reset Password'}</button>
          <Link href="/signup" className="cursor-pointer text-center text-sm text-slate-500">Create an Account</Link>
        </form>
      }
    </>
  )
}
