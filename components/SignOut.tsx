"use client"

import React from 'react'

import { signOut } from 'next-auth/react';

import { useRouter } from 'next/navigation'
import { LogOut } from 'lucide-react'

const SignOut = () => {
    const router = useRouter()
  return (
    <button type="submit" className="flex gap-3 items-center  px-4 py-[.6rem] rounded-md font-poppins" onClick={async () => {
        await signOut()
        router.push("/")
    }}>
        <LogOut strokeWidth={1} className='w-5 h-5 text-black' />
        <span className=  "text-sm text-black">Sign out</span>

      </button>
  )
}

export default SignOut