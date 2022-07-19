import * as noUiSlider from 'nouislider';
import IBook from '../interfaces/IBook';

function addSliderListeners(slider: noUiSlider.target, valueField: HTMLElement) {
  slider?.noUiSlider?.on('update', (values) => {
    if (valueField) valueField.innerText = `${(+values[0]).toFixed()} - ${(+values[1]).toFixed()}`;
  });
}

export default addSliderListeners;
