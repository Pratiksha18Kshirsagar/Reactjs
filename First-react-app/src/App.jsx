import Navbar from "./components/navbar"
import Footer from "./components/footer"
import Card from "./components/card"
import "./App.css"
function App() {


  return (
    <>
      <Navbar />
      <Footer />
      <div className="cards">
        <Card title="Card-1" desc="Wow React " />
        <Card title="Card-2" desc="Wow React " />
        <Card title="Card-3" desc="Wow React " />
        <Card title="Card-4" desc="Wow React " />
      </div>

    </>
  )
}

export default App
