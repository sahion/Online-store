import IBook from '../interfaces/IBook';
import addCartListener from './addToCartListener';
import createElement from './createElement';

function addData(data: IBook[], shoppingCart?: string[]): void {
  const products = document.querySelector<HTMLElement>('.products');

  if (products) {
    products.innerHTML = '';

    if (data.length === 0) {
      createElement(products, {
        type: 'h2',
        classList: ['products__nothing'],
        value: 'Извините, совпадений не обнаружено',
      });
      return;
    }

    data.forEach((book) => {
      const product = createElement(products, {
        type: 'div',
        classList: ['products__product', 'product'],
      });

      const img = createElement(product, {
        type: 'img',
        classList: ['product__image'],
      });
      (img as HTMLImageElement).alt = `Изображение книги ${book.name}`;
      (img as HTMLImageElement).src = book.image;

      createElement(product, {
        type: 'h3',
        classList: ['product__name'],
        value: book.name,
      });

      createElement(product, {
        type: 'div',
        classList: ['product__author'],
        value: `Автор: ${book.author}`,
      });

      createElement(product, {
        type: 'div',
        classList: ['product__author'],
        value: `Жанры: ${book.genre.join(', ')}`,
      });

      createElement(product, {
        type: 'div',
        classList: ['product__year'],
        value: `Вышла в ${book.year}`,
      });

      createElement(product, {
        type: 'div',
        classList: ['product__count'],
        value: `На складе: ${book.quantity}`,
      });

      createElement(product, {
        type: 'div',
        classList: ['product__popular'],
        value: `${book.popular ? '' : 'Не '}Популярно`,
      });
      createElement(product, {
        type: 'button',
        classList: ['btn', 'product__btn', 'product__add'],
        value: 'Добавить в корзину',
      });

      if (shoppingCart && shoppingCart.length !== 0) {
        if (shoppingCart.includes(book.name)) {
          createElement(product, {
            type: 'button',
            classList: ['btn', 'product__btn', 'btn_remove', 'product__remove'],
            value: 'Удалить из корзины',
          });

          createElement(product, {
            type: 'div',
            classList: ['product__counter'],
            value: `${shoppingCart.filter((value) => value === book.name).length}`,
          });
        }
      }
    });
    if (shoppingCart) addCartListener(shoppingCart);
  }
}

export default addData;
