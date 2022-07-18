import * as noUiSlider from 'nouislider';
import data from './components/data/data';
import getRange from './components/functions/getRange';
import 'nouislider/dist/nouislider.css';
import './global.scss';
import addData from './components/functions/addData';
import IBook from './components/interfaces/IBook';

let currentData: IBook[];

currentData = data;

const yearSlider = document.querySelector<noUiSlider.target>('.year__value');
const year: { min: number; max: number } = getRange(data, 'year');
noUiSlider.create(yearSlider as HTMLElement, {
  start: [year.min, year.max],
  connect: true,
  range: {
    min: year.min,
    max: year.max,
  },
  step: 1,
});
const yearValue = document.querySelector<HTMLElement>('.year__current');

const countSlider = document.querySelector<noUiSlider.target>('.count__value');
const count: { min: number; max: number } = getRange(data, 'quantity');
noUiSlider.create(countSlider as HTMLElement, {
  start: [count.min, count.max],
  connect: true,
  range: {
    min: count.min,
    max: count.max,
  },
  step: 1,
});
const countValue = document.querySelector<HTMLElement>('.count__current');

yearSlider?.noUiSlider?.on('update', (values) => {
  if (yearValue) yearValue.innerText = `${values[0]} - ${values[1]}`;
  currentData = data.filter((book) => book.year >= values[0] && book.year <= values[1]);
  addData(currentData);
});

countSlider?.noUiSlider?.on('update', (values) => {
  if (countValue) countValue.innerText = `${values[0]} - ${values[1]}`;
  currentData = data.filter((book) => book.quantity >= values[0] && book.quantity <= values[1]);
  addData(currentData);
});

addData(data);
