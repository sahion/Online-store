import * as noUiSlider from 'nouislider';

export default function getSliderValues(element: noUiSlider.target): number[] {
  return (element?.noUiSlider?.get() as string[]).map(Number);
}
