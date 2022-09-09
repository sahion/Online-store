import * as noUiSlider from 'nouislider';
import IBook from '../interfaces/IBook';
import ISliderRange from '../interfaces/ISliderRange';
import capitalizeFirstLetter from './capitalizeFirstLetter';
import getRange from './getRange';

function createSlider(data: IBook[], type: keyof IBook): [noUiSlider.target, HTMLElement] {
  const slider = document.querySelector<noUiSlider.target>(`.${type}__value`);
  const range = <ISliderRange>getRange(data, type);
  const typeForLocal = capitalizeFirstLetter(type);
  const minLocal = localStorage.getItem(`min${typeForLocal}`);
  const maxLocal = localStorage.getItem(`max${typeForLocal}`);
  noUiSlider.create(slider as HTMLElement, {
    start: [minLocal || range.min, maxLocal || range.max],
    connect: true,
    range: range as noUiSlider.Options['range'],
    step: 1,
  });

  const valueField = document.querySelector<HTMLElement>(`.${type}__current`);

  return [slider as noUiSlider.target, valueField as HTMLElement];
}

export default createSlider;
