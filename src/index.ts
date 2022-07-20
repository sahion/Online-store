import data from './components/data/data';
import 'nouislider/dist/nouislider.css';
import './global.scss';
import addData from './components/functions/addData';
import setFilters from './components/functions/setFilters';
import IBook from './components/interfaces/IBook';
import createSlider from './components/functions/createSlider';
import addSliderListeners from './components/functions/addSliderListeners';
import enableFilters from './components/functions/enableFilters';
import createElement from './components/functions/createElement';
import loadFilters from './components/functions/loadFilters';

const currentData: IBook[] = data;
if (!JSON.parse(localStorage.getItem('shoppingCart') as string)) {
  localStorage.setItem('shoppingCart', JSON.stringify([]));
}

addData(data);
setFilters();
const [yearSlider, yearValue] = createSlider(currentData, 'year');
const [quantitySlider, quantityValue] = createSlider(currentData, 'quantity');
loadFilters();
addSliderListeners(yearSlider, yearValue);
addSliderListeners(quantitySlider, quantityValue);
enableFilters();

const counterCart = document.querySelector<HTMLElement>('.shopping-cart__counter');

const shoppingCart: string[] = JSON.parse(localStorage.getItem('shoppingCart') as string);
if (counterCart) {
  counterCart.innerHTML = `${shoppingCart.length}`;
} else if (shoppingCart.length !== 0) {
  const shoppingCartBlock = document.querySelector<HTMLElement>('.shopping-cart');
  if (shoppingCartBlock)
    createElement(shoppingCartBlock, {
      type: 'div',
      classList: ['shopping-cart__counter'],
      value: `${JSON.parse(localStorage.getItem('shoppingCart') as string).length}`,
    });
}
