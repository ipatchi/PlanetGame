import './App.css'
import Buttons from './Components/Buttons'
import NavBar from './Components/NavBar'

function App() {

  return (
    <>
      <div>
        <NavBar></NavBar>
        <Buttons message='THIS IS A HUGE PIECE OF TEXT'></Buttons>
        <p>
          Hello World
        </p>
      </div>
    </>
  )
}

export default App
