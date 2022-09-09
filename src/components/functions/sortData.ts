import IBook from '../interfaces/IBook';

function sortData(currentData: IBook[]): IBook[] {
  const sortSelector = document.querySelector<HTMLSelectElement>('.sort__value');
  if (sortSelector?.selectedIndex) {
    localStorage.setItem('sort', sortSelector?.options[sortSelector.selectedIndex].value);
    switch (sortSelector?.options[sortSelector.selectedIndex].value) {
      case 'Сортировка-название-возрастание':
        return currentData.sort((a, c) => (a.name >= c.name ? 1 : -1));
      case 'Сортировка-название-убывание':
        return currentData.sort((a, c) => (a.name >= c.name ? -1 : 1));
      case 'Сортировка-год-возрастание':
        return currentData.sort((a, c) => (a.year >= c.year ? 1 : -1));
      case 'Сортировка-год-убывание':
        return currentData.sort((a, c) => (a.year >= c.year ? -1 : 1));
      default:
        return currentData;
    }
  } else {
    localStorage.removeItem('sort');
    return currentData;
  }
}

export default sortData;
