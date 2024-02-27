//A small random function which takes a minimum and maximum and returns an integer value of equal weighting between
const randomInRange = (min: number, max: number) => {
  return Math.floor(Math.random() * (max + 1 - min));
};

export default randomInRange;
