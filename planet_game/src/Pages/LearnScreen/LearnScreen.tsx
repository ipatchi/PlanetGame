import '../../Routing/App.css';
import CentredScreen from '../../Components/Centre/CentredScreen';
import NavBar from '../../Components/NavBar/NavBar';
import CustomButton from '../../Components/CustomButton/CustomButton';
import { useNavigate } from 'react-router-dom';
import Search from '../../Components/Search/Search';

const LearnScreen = () => {
  const navigate = useNavigate();
  const Review = () => {
    navigate('/');
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
          <div className='gap'>
            <Search placeholder_text="Search The Skies..."></Search>
          </div>
        </CentredScreen>
      </div>
    </>
  );
};

export default LearnScreen;
