import "./App.css";
import CentredScreen from "../../Components/Centre/CentredScreen";
import NavBar from "../../Components/NavBar/NavBar";
import CustomButton from "../../Components/CustomButton/CustomButton";
import { useNavigate } from "react-router-dom";

function LearnScreen() {
  const navigate = useNavigate();
  const Review = () => {
    navigate("/");
  };

  return (
    <>
      <div>
        <NavBar title="Planet Game">
          <CustomButton type="small" onClick={Review}>
            Home
          </CustomButton>
        </NavBar>
        <CentredScreen>
          <br></br>
        </CentredScreen>
      </div>
    </>
  );
}

export default LearnScreen;
