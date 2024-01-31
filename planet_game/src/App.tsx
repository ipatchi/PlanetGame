import './App.css';
import CentredScreen from './Components/CentredScreen';
import NavBar from './Components/NavBar';
import QuestionText from './Components/QuestionText';

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

          <QuestionText>Learn</QuestionText>
          <Search placeholder_text="Search The Skies..."></Search>

          <QuestionText>Review</QuestionText>
          <ReviewDrop title = "Question 1" question='Why is mars round?' correct={true} ></ReviewDrop>
          <ReviewDrop title="Question 2" question='Why is saturn ringy?' correct={false} ></ReviewDrop>
          
          <CustomButton type="small" onClick={() => alert("SMALL CLICK")}>Small</CustomButton>
          <CustomButton type="large" onClick={() => alert("LARGE CLICK")}>Large</CustomButton>
          <CustomButton type="XL" onClick={() => alert("XL CLICK")}>XL</CustomButton>
          <CustomButton type="round" onClick={() => alert("Round CLICK")}><p>Round</p></CustomButton>
        </CentredScreen>

      </div>
      
      
    </>
  )
}

export default App
