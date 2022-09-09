import * as noUiSlider from 'nouislider';
import data from '../data/data';
import addData from './addData';
import sortData from './sortData';

function removeFilters(): void {
  localStorage.removeItem('author');
  localStorage.removeItem('genre');
  localStorage.removeItem('search');
  localStorage.removeItem('minYear');
  localStorage.removeItem('maxYear');
  localStorage.removeItem('popular');
  localStorage.removeItem('minQuantity');
  localStorage.removeItem('maxQuantity');

  const authorBlock = document.querySelector<HTMLSelectElement>('.filter__author');
  if (authorBlock) authorBlock.selectedIndex = 0;

  const genreBlock = document.querySelector<HTMLSelectElement>('.filter__genre');
  if (genreBlock) genreBlock.selectedIndex = 0;

  const popularBlock = document.querySelector<HTMLInputElement>('#popular__id');
  if (popularBlock) {
    popularBlock.checked = false;
  }

  const yearValue = document.querySelector<noUiSlider.target>('.year__value');
  if (yearValue && yearValue.noUiSlider)
    yearValue.noUiSlider.set([
      yearValue.noUiSlider.options.range.min as number,
      yearValue.noUiSlider.options.range.max as number,
    ]);

  const quantityValue = document.querySelector<noUiSlider.target>('.quantity__value');
  if (quantityValue && quantityValue.noUiSlider)
    quantityValue.noUiSlider.set([
      quantityValue.noUiSlider.options.range.min as number,
      quantityValue.noUiSlider.options.range.max as number,
    ]);

  const searchField = document.querySelector<HTMLInputElement>('.filter__search');
  if (searchField) searchField.value = '';

  const currentData = sortData(data);
  addData(currentData);
}
export default removeFilters;
