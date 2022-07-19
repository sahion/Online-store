import data from './components/data/data';
import 'nouislider/dist/nouislider.css';
import './global.scss';
import addData from './components/functions/addData';
import setFilters from './components/functions/setFilters';
import IBook from './components/interfaces/IBook';
import createSlider from './components/functions/createSlider';
import addListeners from './components/functions/addListeners';

let currentData: IBook[];

currentData = data;






addData(data);
setFilters();
const [yearSlider, yearValue] = createSlider(currentData,'year');
const [quantitySlider, quantityValue] = createSlider(currentData,'quantity');
addListeners(yearSlider,yearValue,currentData,'year');
addListeners(quantitySlider,quantityValue,currentData,'quantity');