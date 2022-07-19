import * as noUiSlider from 'nouislider';
import data from '../data/data';
import Genre from '../types/Genre';
import addData from './addData';

function changeFilters(): void {
  let currentData = data;

  const authorFilter = document.querySelector<HTMLSelectElement>('.filter__author');
  if (authorFilter) {
    if (authorFilter.selectedIndex !== 0) {
      currentData = currentData.filter(
        (value) => value.author === authorFilter?.options[authorFilter.selectedIndex].value
      );
    }
  }

  const genreFilter = document.querySelector<HTMLSelectElement>('.filter__genre');
  if (genreFilter) {
    if (genreFilter.selectedIndex !== 0) {
      currentData = currentData.filter((value) =>
        value.genre.includes(genreFilter?.options[genreFilter.selectedIndex].value as Genre)
      );
    }
  }

  const popularCheckbox = document.querySelector<HTMLInputElement>('#popular__id');
  if (popularCheckbox?.checked) {
    currentData = currentData.filter((value) => value.popular);
  }

  const yearSlider = document.querySelector<noUiSlider.target>('.year__value');
  currentData = currentData.filter(
    (book) =>
      book.year >= +(yearSlider?.noUiSlider?.get() as string[])[0] &&
      book.year <= +(yearSlider?.noUiSlider?.get() as string[])[1]
  );

  addData(currentData);
}

export default changeFilters;
