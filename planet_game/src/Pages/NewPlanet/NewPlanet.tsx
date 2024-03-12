import { useNavigate } from 'react-router-dom';

import CentredScreen from '@components/Centre/CentredScreen';
import NavBar from '@components/NavBar/NavBar';
import CustomButton from '@components/CustomButton/CustomButton';
import NewPlanet from '@components/NewPlanetForm/NewPlanetForm';
import { PlanetDataType } from '@components/NewPlanetForm/planetDataType';
import { useState } from 'react';

const NewPlanetScreen = () => {

  const navigate = useNavigate();
  const Home = () => {
    navigate('/');
  };

  const [addPlanet, setAddPlanet] = useState(false);

  // this should create a post request to the API
  const doCheck = (value:PlanetDataType) => {
    console.log({value});
  };

  const addAnotherPlanet = () => {
    console.log("added")
    return (
      <div>
        <CustomButton onClick={() => setAddPlanet(true)} type={'large'}> Add a new planet</CustomButton>
      </div>
    )
  }

  return (
    <>
      <div>
        <NavBar title="Planet Game">
          <CustomButton type="small" onClick={Home}>
            Home
          </CustomButton>
        </NavBar>
        <CentredScreen>
          {addPlanet? (
            <NewPlanet onClick={(value) => doCheck(value)}></NewPlanet> ): addAnotherPlanet()
          }
          
        </CentredScreen>
      </div>
    </>
  );
};

export default NewPlanetScreen;
