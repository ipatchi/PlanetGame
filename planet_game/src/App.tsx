import './App.css';
import CentredScreen from './Components/CentredScreen';
import NavBar from './Components/NavBar';
import QuestionText from './Components/QuestionText';
import Search from './Components/Search';


function App() {
  return (
    <>
      <div>
        <NavBar title="Planet Game"></NavBar>
        <CentredScreen>
          <br></br>
          <QuestionText>Learn</QuestionText>
          <Search placeholder_text="Search The Skies..."></Search>
        </CentredScreen>
      </div>
    </>
  )
}

export default App
