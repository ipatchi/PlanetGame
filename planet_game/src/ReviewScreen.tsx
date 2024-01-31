import './App.css';
import CentredScreen from './Components/CentredScreen';
import NavBar from './Components/NavBar';
import QuestionText from './Components/QuestionText';
import ReviewDrop from './Components/ReviewDrop';
import CustomButton from './Components/CustomButton';

function App() {
  return (
    <>
      <div>
        <NavBar title="Planet Game">
          <CustomButton type="small" onClick={() => alert("hi")}>Click Me!</CustomButton>
          <CustomButton type="small" onClick={() => alert("hi")}>Click Me!</CustomButton>
        </NavBar>
        <CentredScreen>
          <br></br>
          <QuestionText>Review</QuestionText>
          <ReviewDrop title = "Question 1" question='Why is mars round?' correct={true} ></ReviewDrop>
          <ReviewDrop title="Question 2" question='Why is saturn ringy?' correct={false} ></ReviewDrop>
        </CentredScreen>

      </div>
      
      
    </>
  )
}

export default App
