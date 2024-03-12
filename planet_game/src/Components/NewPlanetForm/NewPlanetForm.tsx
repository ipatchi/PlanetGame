import React, { useEffect, useState } from 'react';
import getAttributes from '@api/Attributes';
import CentredScreen from '../Centre/CentredScreen';
import './NewPlanetForm.css';
import CustomButton from '../CustomButton/CustomButton';

interface PlanetDataType {
  name?: string;
  typeOfPlanet?: string;
  mass?: number;
  solarDistance?: number;
  description?: string;
  mRadius?: number;
  eRadius?: number;
  pRadius?: number;
  density?: number;
  gravity?: number;
  temperature?: number;
  surfacePressure?: number;
  rotationalPeriod?: number;
}

// const dict: Record<string, string> = {
//   name: 'string',
//   typeOfPlanet: 'string',
//   mass: 'number',
//   solarDistance: 'number',
//   description: 'string',
//   mRadius: 'number',
//   pRadius: 'number',
//   eRadius: 'number',
//   surfacePressure: 'number',
//   rotationalPeriod: 'number',
//   gravity: 'number',
//   temperature: 'number',
//   density: 'number',
// };

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
                    <label>
                      <p>
                        name: &nbsp;
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
                        type: &nbsp;
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
                        mass (kg): &nbsp;
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
                        solar distance (au): &nbsp;
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
                        description: &nbsp;
                        <input
                          className="entryBox"
                          type="string"
                          name="description"
                          value={planetData.description}
                          onChange={handleInputChange}
                        ></input>
                      </p>
                    </label>
                    <label>
                      <p>
                        mean radius (km): &nbsp;
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
                        equatorial radius (km): &nbsp;
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
                        polar radius (km): &nbsp;
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
                        density (g/cm³): &nbsp;
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
                        gravitational field strength (N/kg): &nbsp;
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
                        temperature (K): &nbsp;
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
                        surface pressure (dbar): &nbsp;
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
                        rotationalPeriod: &nbsp;
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
                <CentredScreen>
                  <CustomButton type="small" onClick={() => handleSubmit}>
                    Submit
                  </CustomButton>
                </CentredScreen>
              </form>
            )}
        </div>
      </div>
    </>
  );
};

export default NewPlanet;
