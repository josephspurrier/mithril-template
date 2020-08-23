export const randId = (): string => {
  const min = 1;
  const max = 99999999999999;
  const randomNum = Math.random() * (max - min) + min;
  return Math.floor(randomNum).toString();
};
