"use client";
import { MdDashboard, MdManageAccounts } from "react-icons/md";
import { GrTransaction } from "react-icons/gr";
import {IoAnalytics, IoSettings} from "react-icons/io5";
import { RiShoppingCartLine } from "react-icons/ri";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import logo from "@/public/next.svg"

const menus = [
  {
    title:"Dashboard",
    icon:<MdDashboard/>,
    href:"/admin/dashboard"
  },
  {
    title:"Product",
    icon:<RiShoppingCartLine/>,
    href:"/admin/product"
  },
  {
    title:"Accounts",
    icon:<MdManageAccounts/>,
    href:"#"
  },
  {
    title:"Transactions",
    icon:<GrTransaction/>,
    href:"#"
  },
  {
    title:"Analytics",
    icon:<IoAnalytics/>,
    href:"#"
  },
  {
    title:"Setting",
    icon:<IoSettings/>,
    href:"#"
  }
]
const SideBar = () => {
  const pathname = usePathname()
  return (
    <div className="bg-white w-[300px] min-h-screen p-4 shrink-0">
      <div className="flex items-center gap-4">
      <Image className="size-12 rounded-lg" src={logo} alt="logo"/>
      <h2 className="text-[20px] font-semibold">The Brave Coders</h2>
      </div>
    <ul className="space-y-4 mt-6">
      {menus.map(menu => <Link key={menu.title} href={menu.href} className={`flex gap-2 items-center p-4 rounded-lg cursor-pointer hover:bg-pink hover:text-white ${pathname === menu.href ? "bg-pink text-white" : "bg-gray-200"}`}>
      <div className="text-[20px]">{menu.icon}</div>
      <p>{menu.title}</p>
      </Link>)}
    </ul>
    </div>
  )

}

export default SideBar;