
import Buttons from './Components/Buttons'
import './App.css';
import CentredScreen from './Components/CentredScreen';
import NavBar from './Components/NavBar';
import QuestionText from './Components/QuestionText';
import ReviewDrop from './Components/ReviewDrop';


function App() {
  return (
    <>
      <div>
        <NavBar title="Planet Game"></NavBar>
        <CentredScreen>
          <br></br>
          <QuestionText>Review</QuestionText>
          <ReviewDrop title = "Question 1" question='Why is mars round?' correct={true} ></ReviewDrop>
          <ReviewDrop title = "Question 2" question='Why is saturn ringy?' correct={false} ></ReviewDrop>
          <Buttons></Buttons>
        </CentredScreen>
      </div>
    </>
  )
}

export default App
