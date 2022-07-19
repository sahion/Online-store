import data from '../data/data';

function setFilters(): void {
  const authorSet = new Set<string>();
  const genreSet = new Set<string>();
  data.forEach((value) => {
    authorSet.add(value.author);
    value.genre.forEach((gen) => {
      genreSet.add(gen);
    });
  });

  const authorSelector = document.querySelector('.filter__author');
  authorSet.forEach((author) => {
    const authorOption = document.createElement('option');
    authorOption.value = author;
    authorOption.innerText = author;
    authorSelector?.append(authorOption);
  });

  const genreSelector = document.querySelector('.filter__genre');
  genreSet.forEach((genre) => {
    const genreOption = document.createElement('option');
    genreOption.value = genre;
    genreOption.innerText = genre;
    genreSelector?.append(genreOption);
  });
}

export default setFilters;
