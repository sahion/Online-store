import createElement from './createElement';
import removeFromCart from './removeFromCart';

function addToCart(shoppingCart: string[], NameBlock: HTMLElement) {
  if (shoppingCart.length >= 20) {
    alert('Извините все слоты заполнены');
    return;
  }
  const bookName: string = NameBlock.innerHTML;
  shoppingCart.push(bookName);

  const counterCart = document.querySelector<HTMLElement>('.shopping-cart__counter');
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
        document.querySelector<HTMLElement>('.shopping-cart__counter');
        const counterCart = document.querySelector<HTMLElement>('.shopping-cart__counter');
        if (counterCart) shoppingCart = removeFromCart(shoppingCart, productCounter, bookName, deleteBtn, counterCart);
      });
    }
  }
}

export default addToCart;
