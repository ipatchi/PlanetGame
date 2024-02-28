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

const fromDictionary = (value: string) => {
  if (Object.keys(dict).includes(value)) {
    value = dict[value];
  }
  return value;
};

export { fromDictionary };
