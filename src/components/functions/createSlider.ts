import * as noUiSlider from 'nouislider';
import IBook from '../interfaces/IBook';
import getRange from './getRange';

function createSlider(data: IBook[], type: keyof IBook): [noUiSlider.target, HTMLElement] {
  const slider = document.querySelector<noUiSlider.target>(`.${type}__value`);
  const range: { min: number; max: number } = getRange(data, type);
  const minLocal = localStorage.getItem(`min${type[0].toUpperCase()}${type.slice(1)}`);
  const maxLocal = localStorage.getItem(`max${type[0].toUpperCase()}${type.slice(1)}`);
  noUiSlider.create(slider as HTMLElement, {
    start: [minLocal || range.min, maxLocal || range.max],
    connect: true,
    range: {
      min: range.min,
      max: range.max,
    },
    step: 1,
  });

  const valueField = document.querySelector<HTMLElement>(`.${type}__current`);

  return [slider as noUiSlider.target, valueField as HTMLElement];
}

export default createSlider;
