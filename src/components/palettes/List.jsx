import { useContext } from "react"
import MainContext from "../../context/mainContext"
import Item from "./Item"

export default function List() {
  const { colors } = useContext(MainContext)

  return (
    <div className="palettes palletes--circle">
      {
        colors.map(item => <Item color={item.color} />)
      }
    </div>
  )
}
