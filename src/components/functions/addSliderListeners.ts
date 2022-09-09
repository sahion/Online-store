import * as noUiSlider from 'nouislider';
import getFixedValue from './getFixedValue';

function addSliderListeners(slider: noUiSlider.target, valueField: HTMLElement) {
  slider?.noUiSlider?.on('update', ([startValue, finishValue]) => {
    if (valueField) valueField.innerText = `${getFixedValue(startValue)} - ${getFixedValue(finishValue)}`;
  });
}

export default addSliderListeners;
