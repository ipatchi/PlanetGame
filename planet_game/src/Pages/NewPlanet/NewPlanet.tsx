import { useNavigate } from 'react-router-dom';

import CentredScreen from '@components/Centre/CentredScreen';
import NavBar from '@components/NavBar/NavBar';
import CustomButton from '@components/CustomButton/CustomButton';
import NewPlanet from '@components/NewPlanetForm/NewPlanetForm';

const NewPlanetScreen = () => {
  const navigate = useNavigate();
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
        <CentredScreen><NewPlanet></NewPlanet></CentredScreen>
      </div>
    </>
  );
};

export default NewPlanetScreen;
