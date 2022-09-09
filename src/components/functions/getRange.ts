import IBook from '../interfaces/IBook';
import ISliderRange from '../interfaces/ISliderRange';

function getRange(data: IBook[], parameter: keyof IBook): ISliderRange {
  let min = 9999;
  let max = 0;
  data.forEach((value) => {
    if (value[parameter] < min) min = value[parameter] as number;
    if (value[parameter] > max) max = value[parameter] as number;
  });
  return { min, max };
}

export default getRange;
