import { CART_LIMIT } from '../constants/constants';
import createElement from './createElement';
import removeFromCart from './removeFromCart';

function addToCart(NameBlock: HTMLElement) {
  const shoppingCart: string[] = JSON.parse(localStorage.getItem('shoppingCart') as string);
  if (shoppingCart.length >= CART_LIMIT) {
    alert('Извините все слоты заполнены');
    return;
  }

  const bookName: string = NameBlock.innerHTML;
  shoppingCart.push(bookName);
  localStorage.setItem('shoppingCart', JSON.stringify(shoppingCart));
  let counterCart = document.querySelector<HTMLElement>('.shopping-cart__counter');
  if (counterCart) {
    counterCart.innerHTML = `${shoppingCart.length}`;
  } else {
    const shopCart = document.querySelector<HTMLElement>('.shopping-cart');
    if (shopCart)
      createElement(shopCart, {
        type: 'div',
        classList: ['shopping-cart__counter'],
        value: `${shoppingCart.length}`,
      });
  }

  if (NameBlock.parentElement) {
    const parent = NameBlock.parentElement as HTMLElement;
    const counterBook = parent.querySelector<HTMLElement>('.product__counter');
    if (counterBook) {
      counterBook.innerHTML = `${+counterBook.innerHTML + 1}`;
    } else {
      const productCounter = createElement(parent, {
        type: 'div',
        classList: ['product__counter'],
        value: `${shoppingCart.filter((value) => value === bookName).length}`,
      });
      const deleteBtn = createElement(parent, {
        type: 'button',
        classList: ['btn', 'product__btn', 'btn_remove', 'product__remove'],
        value: 'Удалить из корзины',
      });
      deleteBtn.addEventListener('click', () => {
        counterCart = document.querySelector<HTMLElement>('.shopping-cart__counter');
        if (counterCart) removeFromCart(productCounter, bookName, deleteBtn, counterCart);
      });
    }
  }
}

export default addToCart;
