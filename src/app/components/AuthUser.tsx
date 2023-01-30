'use client'

import { signOut } from "next-auth/react"

function AuthUser({user}: { user: {
  name?: string | null;
  email?: string | null;
  image?: string | null;
}}) {
  return (
    <div onClick={() => signOut()}>{user.name}</div>
  )
}

export default AuthUser