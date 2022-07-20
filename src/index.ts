import data from './components/data/data';
import 'nouislider/dist/nouislider.css';
import './global.scss';
import addData from './components/functions/addData';
import setFilters from './components/functions/setFilters';
import IBook from './components/interfaces/IBook';
import createSlider from './components/functions/createSlider';
import addSliderListeners from './components/functions/addSliderListeners';
import enableFilters from './components/functions/enableFilters';
import addToCart from './components/functions/addToCart';
import addCartListener from './components/functions/addToCartListener';
import createElement from './components/functions/createElement';

const currentData: IBook[] = data;
if (!JSON.parse(localStorage.getItem('shoppingCart') as string)) {
  localStorage.setItem('shoppingCart', JSON.stringify([]));
}

addData(data);
setFilters();
const [yearSlider, yearValue] = createSlider(currentData, 'year');
const [quantitySlider, quantityValue] = createSlider(currentData, 'quantity');
addSliderListeners(yearSlider, yearValue);
addSliderListeners(quantitySlider, quantityValue);
enableFilters();

const counterCart = document.querySelector<HTMLElement>('.shopping-cart__counter');
if (counterCart) {
  const shoppingCart: string[] = JSON.parse(localStorage.getItem('shoppingCart') as string);
  counterCart.innerHTML = `${shoppingCart.length}`;
} else {
  const shopCart = document.querySelector<HTMLElement>('.shopping-cart');
  if (shopCart)
    createElement(shopCart, {
      type: 'div',
      classList: ['shopping-cart__counter'],
      value: `${JSON.parse(localStorage.getItem('shoppingCart') as string).length}`,
    });
}
