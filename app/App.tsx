"use client"
import {store} from "@/redux/store"
import { ReactNode } from "react"
import { Provider } from "react-redux"
interface IProp{
  childern:ReactNode
}
const App = ({childern}:IProp) => {
  return (
    <Provider store={store}>{childern}</Provider>
  )

}

export default App;