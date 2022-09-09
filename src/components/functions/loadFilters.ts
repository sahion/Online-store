function loadFilter(key: string): void {
  const value = localStorage.getItem(key);
  if (value) {
    const valueBlock = document.querySelector<HTMLInputElement>(`.filter__${key}`);
    if (valueBlock) {
      valueBlock.value = value;
    }
  }
}

function loadFilters() {
  loadFilter('author');
  loadFilter('genre');
  loadFilter('popular');
  loadFilter('search');
  loadFilter('sort');
}

export default loadFilters;
