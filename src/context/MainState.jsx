import { useState } from "react"
import MainContext from "./mainContext"

export default function MainState({ children }) {
  const [isDark, setIsDark] = useState(false)

  const colors = {
    greenLight: "#78be1e",
    greenDark: "#019e43",
    blueLight: "#0182c6",
    blueDark: "#1d4f9b",
  }

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
