import { useNavigate } from 'react-router-dom';

import CustomButton from '@components/CustomButton/CustomButton';
import NavBar from '@components/NavBar/NavBar';

const QuestionSelection = () => {
  //Navigation Routing
  const navigate = useNavigate();
  const Question = () => {
    navigate('/Question');
  };
  const Home = () => {
    navigate('/');
  };

  return (
    <>
      <div>
        <NavBar title="Planet Game">
          <CustomButton type="small" onClick={Home}>
            Home
          </CustomButton>
        </NavBar>
        <p></p>
        <>
          <div>Slider :)</div>
        </>
      </div>
    </>
  );
};

export default QuestionSelection;
