import './App.css';
import CentredScreen from './Components/CentredScreen';
import NavBar from './Components/NavBar';
import QuestionText from './Components/QuestionText';
import CustomButton from './Components/CustomButton';
import { useNavigate } from "react-router-dom";

function App() {
    const navigate=useNavigate();
    const Review = () => {
        navigate("/Review")
    }
    return (
        <>
        <div>
            <NavBar title="Planet Game">
                <CustomButton type="small" 
                    onClick={Review}
                    >Review</CustomButton>
            <CustomButton type="small" onClick={() => alert("hi")}>Click Me!</CustomButton>
            </NavBar>
            <CentredScreen>
            <br></br>
            <QuestionText>Review</QuestionText>
            
            <CustomButton type="small" onClick={() => alert("SMALL CLICK")}>Small</CustomButton>
            <CustomButton type="large" onClick={() => alert("LARGE CLICK")}>Large</CustomButton>
            <CustomButton type="XL" onClick={() => alert('XL CLICK')}>XL</CustomButton>
            <CustomButton type="round" onClick={() => alert("Round CLICK")}><p>Round</p></CustomButton>
            </CentredScreen>

        </div>
        
        
        </>
    )
}

export default App
