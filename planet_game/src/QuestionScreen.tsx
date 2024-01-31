import './App.css';
import CentredScreen from './Components/CentredScreen';
import NavBar from './Components/NavBar';
import QuestionText from './Components/QuestionText';
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
            <QuestionText>Question</QuestionText>
            <br></br>
            <CustomButton type="XL" onClick={() => alert('ANSWER 1')}>Answer 1</CustomButton>
            <CustomButton type="XL" onClick={() => alert('ANSWER 2')}>Answer 2</CustomButton>
            <CustomButton type="XL" onClick={() => alert('ANSWER 3')}>Answer 3</CustomButton>
            <CustomButton type="XL" onClick={() => alert('ANSWER 4')}>Answer 4</CustomButton>
        </CentredScreen>

      </div>
      
      
    </>
  )
}

export default App