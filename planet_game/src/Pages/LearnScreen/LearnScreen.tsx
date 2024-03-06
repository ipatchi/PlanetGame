import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import './LearnScreen.css';

import getPlanetNames from '@api/getPlanetNames';
import allDetails from '@api/getAllDetails';
import getAttributes from '@api/Attributes';

import CentredScreen from '@components/Centre/CentredScreen';
import NavBar from '@components/NavBar/NavBar';
import CustomButton from '@components/CustomButton/CustomButton';
import Search from '@components/Search/Search';
import { fromDictionary } from '@scripts/scientificTranslator';

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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const getPlanetCall = async () => {
    const names = await getPlanetNames();
    setPlanetNames(names.sort());
    setIsLoading(false);
  };

  const showDetails = async () => {
    const details = await allDetails(name);
    setListedDetails(details);
    console.log(details);
  };

  const getAllAttributes = async () => {
    const attributes: string[] = await getAttributes();
    setListedAttributes(attributes);
    console.log(attributes);
  };

  useEffect(() => {
    if (name) showDetails();
    getAllAttributes();
    // eslint-disable-next-line react-hooks/exhaustive-deps
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
            <div className="infoBox">
              <h2 className="title">{listedDetails.name}</h2>
              <div className="infoText">
                {listedAttributes.map((attribute: string, i) => (
                  <p key={listedDetails[i]}>
                    {fromDictionary(attribute)} : {listedDetails[attribute]}
                  </p>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default LearnScreen;
