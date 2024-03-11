//Record to hold values stored in API and their more legible counterparts
const dict: Record<string, string> = {
  mass: 'mass (kg)',
  solarDistance: 'solar distance (au)',
  mRadius: 'mean radius (km)',
  pRadius: 'polar radius (km)',
  eRadius: 'equatorial radius (km)',
  surfacePressure: 'surface pressure (dbar)',
  rotationalPeriod: 'rotational period (hours)',
  gravity: 'gravitational field strength (N/kg)',
  temperature: 'temperature (K)',
  density: 'density (g/cm³)',
};

//Takes a value (API Key) and if it is in the record, returns the value, else returns the key to the caller
const fromDictionary = (value: string) => {
  if (Object.keys(dict).includes(value)) {
    return dict[value];
  }
  return value;
};

export { fromDictionary };
