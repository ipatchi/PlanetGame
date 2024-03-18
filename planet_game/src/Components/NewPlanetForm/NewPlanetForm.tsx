import React, { useEffect, useState } from 'react';
import getAttributes from '@api/Attributes';
import CentredScreen from '../Centre/CentredScreen';
import './NewPlanetForm.css';
import CustomButton from '../CustomButton/CustomButton';
import postNewPlanet from '@api/postNewPlanet';

const NewPlanet = () => {
  const [listedAttributes, setListedAttributes] = useState<string[] | null>(
    null
  );

  // NOT REACHING bhere
  //event: React.FormEvent<HTMLFormElement>
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const formJson = Object.fromEntries(formData.entries());
    console.log({formJson})
    postNewPlanet(formJson)
  };

  const getAllAttributes = async () => {
    const attributes: string[] = await getAttributes();
    setListedAttributes(attributes);
  };

  useEffect(() => {
    getAllAttributes();
  }, []);

  return (
    <>
      <div>
        <div className="gap"></div>
        <div>
          {listedAttributes && (
            <form method="post" onSubmit={handleSubmit}>
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
                      ></input>
                    </p>
                  </label>
                  <label>
                    <p>
                      <span className="col-25">type: &nbsp;</span>
                      <select className="entryBox" name="type">
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
                      ></input>
                    </p>
                  </label>
                  <label>
                    <p>
                      <span className="col-25">
                        equitorial radius (km): &nbsp;
                      </span>
                      <input
                        className="entryBox"
                        type="number"
                        name="eRadius"
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
                      ></input>
                    </p>
                  </label>
                  <label>
                    <p>
                      <span className="col-25">density(g/cm³): &nbsp;</span>
                      <input
                        className="entryBox"
                        type="number"
                        name="density"
                      ></input>
                    </p>
                  </label>
                  <label>
                    <p>
                      <span className="col-25">gravity (N/kg): &nbsp;</span>
                      <input
                        className="entryBox"
                        type="number"
                        name="gravity"
                      ></input>
                    </p>
                  </label>
                  <label>
                    <p>
                      <span className="col-25">temperature (k): &nbsp;</span>
                      <input
                        className="entryBox"
                        type="number"
                        name="temperature"
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
                      ></input>
                    </p>
                  </label>
                  <label>
                    <p>
                      <span className="col-25">
                        rotational period (hours): &nbsp;
                      </span>
                      <input
                        className="entryBox"
                        type="number"
                        name="rotationalPeriod"
                      ></input>
                    </p>
                  </label>
                </div>
              </div>
              <CustomButton type="large" onClick={() => {}}>
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
