import data from './components/data/data';
import 'nouislider/dist/nouislider.css';
import './global.scss';
import addData from './components/functions/addData';
import setFilters from './components/functions/setFilters';
import IBook from './components/interfaces/IBook';
import createSlider from './components/functions/createSlider';
import addSliderListeners from './components/functions/addSliderListeners';
import Genre from './components/types/Genre';

let currentData: IBook[];

currentData = data;

const authorFilter = document.querySelector<HTMLSelectElement>('.filter__author');
authorFilter?.addEventListener('change', () => {
  if (authorFilter) {
    if (authorFilter.selectedIndex === 0) {
      currentData = data;
    } else {
      currentData = data.filter((value) => value.author === authorFilter?.options[authorFilter.selectedIndex].value);
    }
    addData(currentData);
  }
});

const genreFilter = document.querySelector<HTMLSelectElement>('.filter__genre');
genreFilter?.addEventListener('change', () => {
  if (genreFilter) {
    if (genreFilter.selectedIndex === 0) {
      currentData = data;
    } else {
      currentData = data.filter((value) =>
        value.genre.includes(genreFilter?.options[genreFilter.selectedIndex].value as Genre)
      );
    }
    addData(currentData);
  }
});

const popularCheckbox = document.querySelector<HTMLInputElement>('#popular__id');

popularCheckbox?.addEventListener('change', () => {
  if (popularCheckbox?.checked) {
    currentData = data.filter((value) => value.popular);
  } else {
    currentData = data;
  }
  addData(currentData);
});

addData(data);
setFilters();
const [yearSlider, yearValue] = createSlider(currentData, 'year');
const [quantitySlider, quantityValue] = createSlider(currentData, 'quantity');
addSliderListeners(yearSlider, yearValue, currentData, 'year');
addSliderListeners(quantitySlider, quantityValue, currentData, 'quantity');
