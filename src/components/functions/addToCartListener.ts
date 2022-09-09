import addToCart from './addToCart';

function addCartListener(): void {
  document.querySelectorAll<HTMLElement>('.product__add').forEach((btn) => {
    btn.addEventListener('click', (event) => {
      const parent = <HTMLElement>(event.target as HTMLElement)?.parentElement;
      const productName = <HTMLElement>parent.querySelector('.product__name');
      if (productName) addToCart(productName);
    });
  });
}

export default addCartListener;
