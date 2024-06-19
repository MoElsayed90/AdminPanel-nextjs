"use client"
import {store} from "@/redux/store"
import { ReactNode } from "react"
import { Provider } from "react-redux"
interface IProp{
  children:ReactNode
}
const App = ({children}:IProp) => {
  return (
    <Provider store={store}>{children}</Provider>
  )

}

export default App;