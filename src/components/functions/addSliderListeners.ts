import * as noUiSlider from 'nouislider';
import IBook from '../interfaces/IBook';
import addData from './addData';
import data from '../data/data';

function addSliderListeners(
  slider: noUiSlider.target,
  valueField: HTMLElement,
  dataCurrent: IBook[],
  key: keyof IBook
) {
  slider?.noUiSlider?.on('update', (values) => {
    if (valueField) valueField.innerText = `${(+values[0]).toFixed()} - ${(+values[1]).toFixed()}`;
    dataCurrent = data.filter((book) => book[key] >= values[0] && book[key] <= values[1]);
    addData(dataCurrent);
  });
}

export default addSliderListeners;
