import { signIn } from "@/auth"

import Image from 'next/image'
 
export default function SignIn() {
  return (
    <form
      action={async () => {
        "use server"
        await signIn("google")
      }}
    >
      <button type="submit" className="flex gap-2 items-center bg-black px-4 py-[.6rem] rounded-md font-poppins">
        <span className="text-white text-sm">Sign in with</span>
          <Image src='/google.svg' alt='google' width={15} height={15} />
      </button>
    </form>
  )
} 