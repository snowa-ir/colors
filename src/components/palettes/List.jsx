import { useContext } from "react"
import MainContext from "../../context/mainContext"
import Item from "./Item"

export default function List() {
  const { colors } = useContext(MainContext)

  console.log(colors)

  return (
    <div className="palettes palletes--circle">
      {
        colors.map(item => <Item key={item.id} color={item.value} />)
      }
    </div>
  )
}
