import addToCart from './addToCart';

function addCartListener(shoppingCart: string[]): void {
  document.querySelectorAll<HTMLElement>('.product__add').forEach((btn) => {
    btn.addEventListener('click', function (event) {
      if (event && event.target && (event.target as HTMLElement).parentElement) {
        const parent = (event.target as HTMLElement).parentElement as HTMLElement;
        if (parent.querySelector('.product__name'))
          addToCart(shoppingCart, parent.querySelector('.product__name') as HTMLElement);
      }
    });
  });
}

export default addCartListener;
