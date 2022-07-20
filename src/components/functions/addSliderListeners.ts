import * as noUiSlider from 'nouislider';

function addSliderListeners(slider: noUiSlider.target, valueField: HTMLElement) {
  slider?.noUiSlider?.on('update', (values) => {
    if (valueField) valueField.innerText = `${(+values[0]).toFixed()} - ${(+values[1]).toFixed()}`;
  });
}

export default addSliderListeners;
