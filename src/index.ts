import data from './components/data/data';
import getRange from './components/functions/getRange';
import noUiSlider from '../node_modules/nouislider';
import '../node_modules/nouislider/dist/nouislider.css'
import './global.scss';

let yearSlider = document.querySelector('.year__value');
const year:{min:number,max:number} = getRange(data,'year');
noUiSlider.create(yearSlider as HTMLElement,{
  start: [year.min, year.max],
  connect: true,
  range: {
    'min' : year.min,
    'max' : year.max
  },
  step: 1
});
const yearValue = document.querySelector<HTMLElement>('.year__current') ;


let countSlider = document.querySelector<HTMLElement>('.count__value');
const count:{min:number,max:number} = getRange(data,'quantity');
noUiSlider.create(countSlider as HTMLElement,{
  start: [count.min, count.max],
  connect: true,
  range: {
    'min' : count.min,
    'max' : count.max
  },
  step: 1
});
const countValue = document.querySelector<HTMLElement>('.count__current');


