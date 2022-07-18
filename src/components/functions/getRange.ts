import IBook from '../interfaces/IBook';

function getRange(data: IBook[], parameter: keyof IBook): { min: number; max: number } {
  let min = 9999;
  let max = 0;
  data.forEach((value) => {
    if (value[parameter] < min) min = value[parameter] as number;
    if (value[parameter] > max) max = value[parameter] as number;
  });
  return { min, max };
}

export default getRange;
