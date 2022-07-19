import IBook from "../interfaces/IBook";
import * as noUiSlider from 'nouislider';
import getRange from "./getRange";
import addData from "./addData";

function createSlider(data:IBook[],type:keyof IBook) : [noUiSlider.target, HTMLElement] {
  const slider = document.querySelector<noUiSlider.target>(`.${type}__value`);
const range: { min: number; max: number } = getRange(data, type);
noUiSlider.create(slider as HTMLElement, {
  start: [range.min, range.max],
  connect: true,
  range: {
    min: range.min,
    max: range.max,
  },
  step: 1,
});

const valueField = document.querySelector<HTMLElement>(`.${type}__current`);

return [slider as noUiSlider.target, valueField as HTMLElement]
} 
  

export default createSlider;