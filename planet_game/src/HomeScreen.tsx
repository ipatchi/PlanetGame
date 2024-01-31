import './App.css';
import CentredScreen from './Components/CentredScreen';
import NavBar from './Components/NavBar';
import CustomButton from './Components/CustomButton';
import { useNavigate } from "react-router-dom";

function QuestionScreen() {
    const navigate=useNavigate();
    const Learn = () => {
        navigate("/Learn")
    }
    const Start = () => {
        navigate("/Question")
    }
    return (
        <>
        <div>
            <NavBar title="Planet Game">
                <CustomButton type="small" onClick={Learn}>Learn</CustomButton>
            </NavBar>
            <CentredScreen>
            <br></br>
            <CustomButton type="XL" onClick={Start}>Start</CustomButton>
            </CentredScreen>

        </div>
        
        
        </>
    )
}

export default QuestionScreen
