import * as noUiSlider from 'nouislider';
import changeFilters from './changeFilters';
import removeFilters from './removeFilters';

function enableFilters(): void {
  const authorFilter = document.querySelector<HTMLSelectElement>('.filter__author');
  authorFilter?.addEventListener('change', changeFilters);

  const genreFilter = document.querySelector<HTMLSelectElement>('.filter__genre');
  genreFilter?.addEventListener('change', changeFilters);

  const popularCheckbox = document.querySelector<HTMLInputElement>('#popular__id');
  popularCheckbox?.addEventListener('change', changeFilters);

  const yearSlider = document.querySelector<noUiSlider.target>('.year__value');
  yearSlider?.noUiSlider?.on('update', changeFilters);

  const quantitySlider = document.querySelector<noUiSlider.target>('.quantity__value');
  quantitySlider?.noUiSlider?.on('update', changeFilters);

  const searchInput = document.querySelector<HTMLInputElement>('.filter__search');
  searchInput?.addEventListener('input', changeFilters);

  const sortSelector = document.querySelector<HTMLSelectElement>('.sort__value');
  sortSelector?.addEventListener('change', changeFilters);

  const filterClearBtn = document.querySelector<HTMLButtonElement>('.filter__clear');
  filterClearBtn?.addEventListener('click', removeFilters);
}
export default enableFilters;
