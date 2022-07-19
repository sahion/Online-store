import * as noUiSlider from 'nouislider';
import IBook from '../interfaces/IBook';
import addData from './addData';

function addListeners(slider:noUiSlider.target, valueField: HTMLElement,data:IBook[] , key:keyof IBook ){

slider?.noUiSlider?.on('update', (values) => {
  if (valueField) valueField.innerText = `${(+values[0]).toFixed()} - ${(+values[1]).toFixed()}`;
  data = data.filter((book) => book[key] >= values[0] && book[key] <= values[1]);
  addData(data);
});

}

export default addListeners;