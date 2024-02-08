import '../../Routing/App.css';
import CentredScreen from '../../Components/Centre/CentredScreen';
import NavBar from '../../Components/NavBar/NavBar';
import CustomButton from '../../Components/CustomButton/CustomButton';
import { useNavigate } from 'react-router-dom';
import Search from '../../Components/Search/Search';
import Info from '../../Components/Info/info';
import { useEffect, useState } from 'react';
import allDetails from '../../API/getAllDetails';
import getAttributes from '../../API/Attributes';
import './LearnScreen.css'

const LearnScreen = () => {
  const [listedDetails, setListedDetails] = useState<{[index: string]:string} | null>(null);
  const [listedAttributes, setListedAttributes] = useState<string[] | null>(null);

  const navigate = useNavigate();
  const Review = () => {
    navigate('/');
  };

  const showDetails = async () => {
    const details = await allDetails();
    setListedDetails(details);
  };

  const getAllAttributes = async () => {
    const attributes: string[] = await getAttributes();
    setListedAttributes(attributes);
  };

  useEffect(() => {
    showDetails();
    getAllAttributes();
  }, []);

  console.log({ listedDetails });

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
          {listedDetails && listedAttributes && (
            <Info>
              <CentredScreen>
                <h2>{listedDetails.name}</h2>
              </CentredScreen>
              {listedAttributes.map((entry:string) => (
                <p>
                  {entry} : {listedDetails[entry]}
                </p>
              ))}
            </Info>
          )}
        </div>
      </div>
    </>
  );
};

export default LearnScreen;
