import data from './components/data/data';
import 'nouislider/dist/nouislider.css';
import './global.scss';
import addData from './components/functions/addData';
import setFilters from './components/functions/setFilters';
import IBook from './components/interfaces/IBook';
import createSlider from './components/functions/createSlider';
import addSliderListeners from './components/functions/addSliderListeners';
import enableFilters from './components/functions/enableFiltersListeners';
import addToCart from './components/functions/addToCart';
import addCartListener from './components/functions/addToCartListener';

const currentData: IBook[] = data;
const shoppingCart: string[] = [];

addData(data);
setFilters();
const [yearSlider, yearValue] = createSlider(currentData, 'year');
const [quantitySlider, quantityValue] = createSlider(currentData, 'quantity');
addSliderListeners(yearSlider, yearValue);
addSliderListeners(quantitySlider, quantityValue);
enableFilters(shoppingCart);
