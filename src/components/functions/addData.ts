import IBook from '../interfaces/IBook';
import CardBtn from '../types/cardBtn';
import ProductInfo from '../types/productInfo';
import addCartListener from './addToCartListener';
import createElement from './createElement';

export default function addData(data: IBook[]): void {
  const products = document.querySelector<HTMLElement>('.products');

  if (!products) return;
  products.innerHTML = '';

  if (data.length === 0) {
    createElement(products, {
      type: 'h2',
      classList: ['products__nothing'],
      value: ProductInfo.notFound,
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
      value: `${ProductInfo.author} ${book.author}`,
    });

    createElement(product, {
      type: 'div',
      classList: ['product__author'],
      value: `${ProductInfo.genre} ${book.genre.join(', ')}`,
    });

    createElement(product, {
      type: 'div',
      classList: ['product__year'],
      value: `${ProductInfo.released} ${book.year}`,
    });

    createElement(product, {
      type: 'div',
      classList: ['product__count'],
      value: `${ProductInfo.preserved} ${book.quantity}`,
    });

    createElement(product, {
      type: 'div',
      classList: ['product__isPopular'],
      value: book.isPopular ? ProductInfo.popular : ProductInfo.unPopular,
    });

    createElement(product, {
      type: 'button',
      classList: ['btn', 'product__btn', 'product__add'],
      value: CardBtn.add,
    });

    const shoppingCart: string[] = JSON.parse(localStorage.getItem('shoppingCart') as string) as string[];
    if (shoppingCart && shoppingCart.length !== 0) {
      if (shoppingCart.includes(book.name)) {
        createElement(product, {
          type: 'button',
          classList: ['btn', 'product__btn', 'btn_remove', 'product__remove'],
          value: CardBtn.remove,
        });

        createElement(product, {
          type: 'div',
          classList: ['product__counter'],
          value: `${shoppingCart.filter((value) => value === book.name).length}`,
        });
      }
    }
  });

  addCartListener();
}
