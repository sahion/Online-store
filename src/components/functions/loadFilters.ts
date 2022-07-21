import * as noUiSlider from 'nouislider';

function loadFilters() {
  const author = localStorage.getItem('author');
  if (author) {
    const authorBlock = document.querySelector<HTMLInputElement>('.filter__author');
    if (authorBlock) {
      authorBlock.value = author;
    }
  }

  const genre = localStorage.getItem('genre');
  if (genre) {
    const genreBlock = document.querySelector<HTMLInputElement>('.filter__genre');
    if (genreBlock) {
      genreBlock.value = genre;
    }
  }

  const popular = localStorage.getItem('popular');
  if (popular) {
    const popularBlock = document.querySelector<HTMLInputElement>('#popular__id');
    if (popularBlock) {
      popularBlock.checked = true;
    }
  }
}

const minYear = localStorage.getItem('minYear');
const maxYear = localStorage.getItem('maxYear');
if (minYear || maxYear) {
  const year = document.querySelector<noUiSlider.target>('.year__value');
  if (year) {
    year.noUiSlider?.set([minYear as string, maxYear as string]);
  }
}

const search = localStorage.getItem('search');
if (search) {
  const searchField = document.querySelector<HTMLInputElement>('.filter__search');
  if (searchField) {
    searchField.value = search;
  }
}

const sort = localStorage.getItem('sort');
if (sort) {
  const sortBlock = document.querySelector<HTMLInputElement>('.sort__value');
  if (sortBlock) {
    sortBlock.value = sort;
  }
}

export default loadFilters;
