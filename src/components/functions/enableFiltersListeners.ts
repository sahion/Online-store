import * as noUiSlider from 'nouislider';
import changeFilters from './changeFilters';

function enableFilters(shoppingCart: string[]): void {
  const authorFilter = document.querySelector<HTMLSelectElement>('.filter__author');
  authorFilter?.addEventListener('change', () => changeFilters(shoppingCart));

  const genreFilter = document.querySelector<HTMLSelectElement>('.filter__genre');
  genreFilter?.addEventListener('change', () => changeFilters(shoppingCart));

  const popularCheckbox = document.querySelector<HTMLInputElement>('#popular__id');
  popularCheckbox?.addEventListener('change', () => changeFilters(shoppingCart));

  const yearSlider = document.querySelector<noUiSlider.target>('.year__value');
  yearSlider?.noUiSlider?.on('update', () => changeFilters(shoppingCart));

  const quantitySlider = document.querySelector<noUiSlider.target>('.quantity__value');
  quantitySlider?.noUiSlider?.on('update', () => changeFilters(shoppingCart));

  const searchInput = document.querySelector<HTMLInputElement>('.filter__search');
  searchInput?.addEventListener('input', () => changeFilters(shoppingCart));

  const sortSelector = document.querySelector<HTMLSelectElement>('.sort__value');
  sortSelector?.addEventListener('change', () => changeFilters(shoppingCart));
}
export default enableFilters;
