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
    currentData = currentData.filter((value) => value.popular);
    localStorage.setItem('popular', 'true');
  } else {
    localStorage.removeItem('popular');
  }

  const yearSlider = document.querySelector<noUiSlider.target>('.year__value');
  currentData = currentData.filter(
    (book) =>
      book.year >= +(yearSlider?.noUiSlider?.get() as string[])[0] &&
      book.year <= +(yearSlider?.noUiSlider?.get() as string[])[1]
  );
  localStorage.setItem('minYear', (yearSlider?.noUiSlider?.get() as string[])[0]);
  localStorage.setItem('maxYear', (yearSlider?.noUiSlider?.get() as string[])[1]);

  const quantitySlider = document.querySelector<noUiSlider.target>('.quantity__value');
  currentData = currentData.filter(
    (book) =>
      book.quantity >= +(quantitySlider?.noUiSlider?.get() as string[])[0] &&
      book.quantity <= +(quantitySlider?.noUiSlider?.get() as string[])[1]
  );
  localStorage.setItem('minQuantity', (quantitySlider?.noUiSlider?.get() as string[])[0]);
  localStorage.setItem('maxQuantity', (quantitySlider?.noUiSlider?.get() as string[])[1]);

  const searchInput = document.querySelector<HTMLInputElement>('.filter__search');
  if (searchInput && searchInput.value) {
    currentData = currentData.filter((value) => value.name.toLowerCase().includes(searchInput.value.toLowerCase()));
    localStorage.setItem('search', searchInput.value);
  } else {
    localStorage.removeItem('search');
  }

  const sortSelector = document.querySelector<HTMLSelectElement>('.sort__value');
  if (sortSelector && sortSelector.selectedIndex !== 0) {
    localStorage.setItem('sort', sortSelector?.options[sortSelector.selectedIndex].value);
    switch (sortSelector?.options[sortSelector.selectedIndex].value) {
      case 'Сортировка-название-возрастание':
        currentData = currentData.sort((a, c) => (a.name >= c.name ? 1 : -1));
        break;
      case 'Сортировка-название-убывание':
        currentData = currentData.sort((a, c) => (a.name >= c.name ? -1 : 1));
        break;
      case 'Сортировка-год-возрастание':
        currentData = currentData.sort((a, c) => (a.year >= c.year ? 1 : -1));
        break;
      case 'Сортировка-год-убывание':
        currentData = currentData.sort((a, c) => (a.year >= c.year ? -1 : 1));
        break;
      default:
    }
  } else {
    localStorage.removeItem('sort');
  }

  addData(currentData);
}

export default changeFilters;
