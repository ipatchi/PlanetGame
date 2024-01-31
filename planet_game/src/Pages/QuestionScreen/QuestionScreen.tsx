import "../../Routing/App.css";
import CentredScreen from "../../Components/Centre/CentredScreen";
import NavBar from "../../Components/NavBar/NavBar";
import QuestionText from "../../Components/QuestionText/QuestionText";
import CustomButton from "../../Components/CustomButton/CustomButton";
import { useNavigate } from "react-router-dom";

function App() {
  const navigate = useNavigate();
  const Review = () => {
    navigate("/Review");
  };
  const Home = () => {
    navigate("/");
  };
  return (
    <>
      <div>
        <NavBar title="Planet Game">
          <CustomButton type="small" onClick={Home}>
            Home
          </CustomButton>
        </NavBar>
        <CentredScreen>
          <QuestionText>Question</QuestionText>
          <div>
            <CustomButton type="XL" onClick={() => alert("ANSWER 1")}>
              Answer 1
            </CustomButton>
            <CustomButton type="XL" onClick={() => alert("ANSWER 2")}>
              Answer 2
            </CustomButton>
            <CustomButton type="XL" onClick={() => alert("ANSWER 3")}>
              Answer 3
            </CustomButton>
            <CustomButton type="XL" onClick={() => alert("ANSWER 4")}>
              Answer 4
            </CustomButton>
          </div>
          <CustomButton type="large" onClick={Review}>
            Continue
          </CustomButton>
        </CentredScreen>
      </div>
    </>
  );
}

export default App;
