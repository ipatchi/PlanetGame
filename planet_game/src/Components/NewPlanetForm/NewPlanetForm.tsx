import React, { useEffect, useState } from 'react';
import getAttributes from '@api/Attributes';
import CentredScreen from '../Centre/CentredScreen';
import './NewPlanetForm.css';
import CustomButton from '../CustomButton/CustomButton';
import { PlanetDataType } from './planetDataType';


interface FormProps {
  onClick: (data: PlanetDataType) => void;
}

const NewPlanet = ({ onClick }: FormProps) => {
  const [listedAttributes, setListedAttributes] = useState<string[] | null>(
    null
  );
  const [planetData, setPlanetData] = React.useState<PlanetDataType>({});

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setPlanetData({ ...planetData, [name]: value });
    console.log({ planetData });
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const newPlanetData = planetData;
    onClick(planetData);
    console.log({planetData}, {newPlanetData})
    return newPlanetData;
  };

  const getAllAttributes = async () => {
    const attributes: string[] = await getAttributes();
    setListedAttributes(attributes);
  };

  useEffect(() => {
    getAllAttributes();
    // eslint-disable-next-line react-hooks/exhaustive-deps
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
                      <input
                        className="entryBox"
                        type="string"
                        name="typeOfPlanet"
                        value={planetData.typeOfPlanet}
                        onChange={handleInputChange}
                      ></input>
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
