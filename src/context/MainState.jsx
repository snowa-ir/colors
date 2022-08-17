import { useState } from "react"
import MainContext from "./mainContext"

export default function MainState({ children }) {
  const [isDark, setIsDark] = useState(false)

  const colors = [
    {
      id: 1,
      name: "greenLight",
      value: "#78be1e",
    },
    {
      id: 2,
      name: "greenDark",
      value: "#019e43",
    },
    {
      id: 3,
      name: "blueLight",
      value: "#0182c6",
    },
    {
      id: 4,
      name: "blueDark",
      value: "#1d4f9b",
    }
  ]


  return (
    <MainContext.Provider
      value={{
        colors,

        isDark, setIsDark
      }}
    >
      {children}
    </MainContext.Provider>
  )
}
