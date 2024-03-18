import axios from 'axios';
import { PlanetDataType } from '@components/NewPlanetForm/planetDataType';

interface SearchType {
  data: { key: string }[];
}
const postNewPlanet = async (planetData: PlanetDataType) => {
    alert("reached here")
  const req: SearchType = await axios.post('http://localhost:8080/planet/', {
    name: planetData.name,
    type: planetData.type,
    mass: planetData.mass,
    solarDistance: planetData.solarDistance,
    description: planetData.description,
    mRadius: planetData.mRadius,
    eRadius: planetData.eRadius,
    pRadius: planetData.pRadius,
    density: planetData.density,
    gravity: planetData.gravity,
    temperature: planetData.temperature,
    surfacePressure: planetData.surfacePressure,
    rotationalPeriod: planetData.rotationalPeriod,
  });
  console.log(JSON.stringify(req));
};

export default postNewPlanet;
