import NavBar from './components/Navbar/NavBar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import './App.css'

function App() {

  return (
    <div>
      <NavBar />
      <ItemListContainer saludo={"creando mi Landing"} />
      <ItemListContainer saludo={"Guidon Frydman"} />
    </div>
  )
}

export default App
