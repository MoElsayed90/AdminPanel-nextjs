'use client'
import { SessionProvider } from "next-auth/react";
import { ReactNode } from "react";

interface IAuth {
  children: ReactNode
}

const AuthProvider = ({children}:IAuth) => {
  return (
    <SessionProvider>{children}</SessionProvider>
  )

}

export default AuthProvider;