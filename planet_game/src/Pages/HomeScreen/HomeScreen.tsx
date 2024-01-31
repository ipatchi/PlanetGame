import "./App.css";
import CentredScreen from "../../Components/Centre/CentredScreen";
import NavBar from "../../Components/NavBar/NavBar";
import CustomButton from "../../Components/CustomButton/CustomButton";
import { useNavigate } from "react-router-dom";

function QuestionScreen() {
  const navigate = useNavigate();
  const Learn = () => {
    navigate("/Learn");
  };
  const Start = () => {
    navigate("/Question");
  };
  return (
    <>
      <div>
        <NavBar title="Planet Game"></NavBar>
        <CentredScreen>
          {/* use padding for breaks*/}
          <CustomButton type="XL" onClick={Start}>
            Start
          </CustomButton>

          <CustomButton type="XL" onClick={Learn}>
            Learn
          </CustomButton>
        </CentredScreen>
      </div>
    </>
  );
}

export default QuestionScreen;