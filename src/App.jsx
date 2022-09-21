import "./assets/styles/main.scss"

import MainState from "./context/MainState"

import Footer from "./components/layouts/Footer"
import Header from "./components/layouts/Header"
import Palettes from "./components/palettes/List"

function App() {
  return (
    <MainState>
      <div className="container">
        <Header />
        <Palettes />
        <Footer />
      </div>
    </MainState>
  )
}

export default App
