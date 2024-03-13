import React, { useEffect, useState } from 'react';
import getAttributes from '@api/Attributes';
import CentredScreen from '../Centre/CentredScreen';
import './NewPlanetForm.css';
import CustomButton from '../CustomButton/CustomButton';
import { PlanetDataType } from './planetDataType';
import postNewPlanet from '@api/postNewPlanet';

const NewPlanet = () => {
  const [listedAttributes, setListedAttributes] = useState<string[] | null>(
    null
  );
  const [planetData, setPlanetData] = useState<PlanetDataType>({});

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setPlanetData({ ...planetData, [name]: value });
    console.log({ planetData });
  };
  const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const { name, value } = event.target;
    setPlanetData({ ...planetData, [name]: value });
    console.log({ planetData });
  };


  // NOT REACHING bhere
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // API call
    alert('here');
    postNewPlanet(planetData);
    console.log({ planetData });
  };

  const getAllAttributes = async () => {
    const attributes: string[] = await getAttributes();
    setListedAttributes(attributes);
  };

  useEffect(() => {
    getAllAttributes();
  });

  return (
    <>
      <div>
        <div className="gap"></div>
        <div>
          {listedAttributes && (
            <form>
              <div className="infoBox">
                <div className="infoText">
                  <CentredScreen>
                    <h2>Create a new planet:</h2>
                  </CentredScreen>
                  <label>
                    <p>
                      <span className="col-25">name:&nbsp; </span>
                      <input
                        className="entryBox"
                        type="string"
                        name="name"
                        value={planetData.name}
                        onChange={handleInputChange}
                      ></input>
                    </p>
                  </label>
                  <label>
                    <p>
                      <span className="col-25">type: &nbsp;</span>
                      <select
                        className="entryBox"
                        value={planetData.type}
                        name="type"
                        onChange={handleSelectChange}
                      >
                        <option value={'gaseous'}>gaseous</option>
                        <option value={'terrestrial'}>terrestrial</option>
                      </select>
                    </p>
                  </label>
                  <label>
                    <p>
                      <span className="col-25">mass (kg): &nbsp;</span>
                      <input
                        className="entryBox"
                        type="number"
                        name="mass"
                        value={planetData.mass}
                        onChange={handleInputChange}
                      ></input>
                    </p>
                  </label>
                  <label>
                    <p>
                      <span className="col-25">
                        solar distance (au): &nbsp;
                      </span>
                      <input
                        className="entryBox"
                        type="number"
                        name="solarDistance"
                        value={planetData.solarDistance}
                        onChange={handleInputChange}
                      ></input>
                    </p>
                  </label>
                  <label>
                    <p>
                      <span className="col-25">description: &nbsp;</span>
                      <input
                        className="entryBox desc"
                        type="string"
                        name="description"
                        value={planetData.description}
                        onChange={handleInputChange}
                      ></input>
                    </p>
                  </label>
                  <label>
                    <p>
                      <span className="col-25">mean radius (km): &nbsp;</span>
                      <input
                        className="entryBox"
                        type="number"
                        name="mRadius"
                        value={planetData.mRadius}
                        onChange={handleInputChange}
                      ></input>
                    </p>
                  </label>
                  <label>
                    <p>
                      <span className="col-25">
                        equatorial radius (km): &nbsp;
                      </span>
                      <input
                        className="entryBox"
                        type="number"
                        name="eRadius"
                        value={planetData.eRadius}
                        onChange={handleInputChange}
                      ></input>
                    </p>
                  </label>
                  <label>
                    <p>
                      <span className="col-25">polar radius (km): &nbsp;</span>
                      <input
                        className="entryBox"
                        type="number"
                        name="pRadius"
                        value={planetData.pRadius}
                        onChange={handleInputChange}
                      ></input>
                    </p>
                  </label>
                  <label>
                    <p>
                      <span className="col-25">density (g/cm³): &nbsp;</span>
                      <input
                        className="entryBox"
                        type="number"
                        name="density"
                        value={planetData.density}
                        onChange={handleInputChange}
                      ></input>
                    </p>
                  </label>
                  <label>
                    <p>
                      <span className="col-25">
                        gravitational field strength (N/kg):{' '}
                      </span>
                      <input
                        className="entryBox"
                        type="number"
                        name="gravity"
                        value={planetData.gravity}
                        onChange={handleInputChange}
                      ></input>
                    </p>
                  </label>
                  <label>
                    <p>
                      <span className="col-25">temperature (K): &nbsp;</span>
                      <input
                        className="entryBox"
                        type="number"
                        name="temperature"
                        value={planetData.temperature}
                        onChange={handleInputChange}
                      ></input>
                    </p>
                  </label>
                  <label>
                    <p>
                      <span className="col-25">
                        surface pressure (dbar): &nbsp;
                      </span>
                      <input
                        className="entryBox"
                        type="number"
                        name="surfacePressure"
                        value={planetData.surfacePressure}
                        onChange={handleInputChange}
                      ></input>
                    </p>
                  </label>
                  <label>
                    <p>
                      <span className="col-25">rotationalPeriod: &nbsp;</span>
                      <input
                        className="entryBox"
                        type="number"
                        name="rotationalPeriod"
                        value={planetData.rotationalPeriod}
                        onChange={handleInputChange}
                      ></input>
                    </p>
                  </label>
                </div>
              </div>
              <CustomButton type="large" onClick={() => handleSubmit}>
                submit
              </CustomButton>
            </form>
          )}
        </div>
      </div>
    </>
  );
};

export default NewPlanet;
