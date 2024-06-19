"use client"

import Login from "@/components/admin-panel/Login";
import Loader from "@/components/admin-panel/loader";
import { useAppSelector } from "@/redux/hooks";
import { useSession } from "next-auth/react";
import { ReactNode } from "react";

const Layout = ({children}:{children:ReactNode}) => {
  const isLoading = useAppSelector(store => store.LoadingReducer)
  const {data:session}=useSession()
  if(!session?.user){
    return <Login/>;
  }
  return (
    <div className="flex">
    {/* <SideBar/> */}
    <div className="w-full h-full">
      {/* <Navbar/> */}
      <div className="bg-gray-200 p-4 h-[calc(100vh-64px)]">{children}</div>
    </div>
    {isLoading && <Loader/>}
    </div>
  )

}

export default Layout;