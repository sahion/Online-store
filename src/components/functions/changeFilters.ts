import * as noUiSlider from 'nouislider';
import data from '../data/data';
import Genre from '../types/Genre';
import addData from './addData';
import getSliderValues from './getSliderValues';
import sortData from './sortData';

function changeFilters(): void {
  let currentData = data;

  const authorFilter = document.querySelector<HTMLSelectElement>('.filter__author');
  if (authorFilter) {
    if (authorFilter.selectedIndex !== 0) {
      currentData = currentData.filter(
        (value) => value.author === authorFilter?.options[authorFilter.selectedIndex].value
      );
      localStorage.setItem('author', authorFilter?.options[authorFilter.selectedIndex].value);
    } else {
      localStorage.removeItem('author');
    }
  }

  const genreFilter = document.querySelector<HTMLSelectElement>('.filter__genre');
  if (genreFilter) {
    if (genreFilter.selectedIndex !== 0) {
      currentData = currentData.filter((value) =>
        value.genre.includes(genreFilter?.options[genreFilter.selectedIndex].value as Genre)
      );
      localStorage.setItem('genre', genreFilter?.options[genreFilter.selectedIndex].value);
    } else {
      localStorage.removeItem('genre');
    }
  }

  const popularCheckbox = document.querySelector<HTMLInputElement>('#popular__id');
  if (popularCheckbox?.checked) {
    currentData = currentData.filter((value) => value.isPopular);
    localStorage.setItem('popular', 'true');
  } else {
    localStorage.removeItem('popular');
  }

  const yearSlider = document.querySelector<noUiSlider.target>('.year__value');
  if (yearSlider) {
    const [yearStart, yearFinish] = getSliderValues(yearSlider);
    currentData = currentData.filter((book) => book.year >= yearStart && book.year <= yearFinish);
    localStorage.setItem('minYear', yearStart.toString());
    localStorage.setItem('maxYear', yearFinish.toString());
  }
  const quantitySlider = document.querySelector<noUiSlider.target>('.quantity__value');
  if (quantitySlider) {
    const [quantityStart, quantityFinish] = getSliderValues(quantitySlider);
    currentData = currentData.filter((book) => book.quantity >= quantityStart && book.quantity <= quantityFinish);
    localStorage.setItem('minQuantity', quantityStart.toString());
    localStorage.setItem('maxQuantity', quantityFinish.toString());
  }
  const searchInput = document.querySelector<HTMLInputElement>('.filter__search');
  if (searchInput && searchInput.value) {
    currentData = currentData.filter((value) => value.name.toLowerCase().includes(searchInput.value.toLowerCase()));
    localStorage.setItem('search', searchInput.value);
  } else {
    localStorage.removeItem('search');
  }

  currentData = sortData(currentData);

  addData(currentData);
}

export default changeFilters;
