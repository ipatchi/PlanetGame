import '../../Routing/App.css';
import CentredScreen from '../../Components/Centre/CentredScreen';
import NavBar from '../../Components/NavBar/NavBar';
import CustomButton from '../../Components/CustomButton/CustomButton';
import { useNavigate } from 'react-router-dom';
import Search from '../../Components/Search/Search';
import Info from '../../Components/Info/info';
import getPlanetNames from '../../API/getPlanetNames';
import { useEffect, useState } from 'react';
import allDetails from '../../API/getAllDetails';
import getAttributes from '../../API/Attributes';
import './LearnScreen.css';

const LearnScreen = () => {
  const [listedDetails, setListedDetails] = useState<{
    [index: string]: string;
  } | null>(null);
  const [listedAttributes, setListedAttributes] = useState<string[] | null>(
    null
  );
  const [planetNames, setPlanetNames] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [name, setName] = useState<string>('');

  //Navigation
  const navigate = useNavigate();
  const Review = () => {
    navigate('/');
  };

  //Planet API Call
  useEffect(() => {
    getPlanetCall();
  }, []);

  const getPlanetCall = async () => {
    const names = await getPlanetNames();

    setPlanetNames(names);

    setIsLoading(false);
  };

  const showDetails = async () => {

   const details = await allDetails(name);
    setListedDetails(details);
  };

  const getAllAttributes = async () => {
    const attributes: string[] = await getAttributes();
    setListedAttributes(attributes);
  };

  useEffect(() => {
    showDetails();
    getAllAttributes();
  }, [name]);
  
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
            {isLoading ? (
              <p>Loading...</p>
            ) : (
              <Search
                item_list={planetNames}
                placeholder_text="Search The Skies..."
                call_on_click={(value) => setName(value)}
              ></Search>
            )}
          </div>
        </CentredScreen>
        <div>
          {listedDetails && listedAttributes && (
            <div className='box'>
              <p className="info">
                <Info>
                  <CentredScreen>
                    <h2 className="title">{listedDetails.name}</h2>
                  </CentredScreen>
                  {listedAttributes.map((entry: string) => (
                    <p key={listedDetails[entry]}>
                      {entry} : {listedDetails[entry]}
                    </p>
                  ))}
                </Info>
              </p>
          </div>
          )}
        </div>
      </div>
    </>
  );
};

export default LearnScreen;
