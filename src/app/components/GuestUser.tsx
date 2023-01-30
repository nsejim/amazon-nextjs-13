'use client'
import { signIn } from 'next-auth/react';

function GuestUser() {
  return (
    <div onClick={() => signIn("google")}>SignIn</div>
  )
}

export default GuestUser