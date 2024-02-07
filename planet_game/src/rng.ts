const randomInRange = (min: number, max: number) => {
  return Math.floor(Math.random() * (max + 1 - min));
};

export default randomInRange;
