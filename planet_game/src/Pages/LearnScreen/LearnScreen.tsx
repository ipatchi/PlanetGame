import '../../Routing/App.css';
import CentredScreen from '../../Components/Centre/CentredScreen';
import NavBar from '../../Components/NavBar/NavBar';
import CustomButton from '../../Components/CustomButton/CustomButton';
import { useNavigate } from 'react-router-dom';
import Search from '../../Components/Search/Search';
import Info from '../../Components/Info/info';
import { useEffect, useState } from 'react';
import allDetails from '../../API/getAllDetails';

const LearnScreen = () => {
  const [listedDetails, setListedDetails] = useState<string | null>(null);

  const navigate = useNavigate();
  const Review = () => {
    navigate('/');
  };

  const showDetails = async () => {
    const detailsArray = JSON.stringify( await allDetails());
    setListedDetails(detailsArray);
  };

  useEffect(() => {
    showDetails();
  }, []);

  return (
    <>
      <div>
        <NavBar title="Planet Game">
          <CustomButton type="small" onClick={Review}>
            Home
          </CustomButton>
        </NavBar>
        <CentredScreen>
          <div className="gap">
            <Search placeholder_text="Search The Skies..."></Search>
          </div>
        </CentredScreen>
        <div className="info">
          <Info>This is some text {listedDetails}
          </Info>
        </div>
      </div>
    </>
  );
};

export default LearnScreen;
