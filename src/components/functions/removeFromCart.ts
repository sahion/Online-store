function removeFromCart(
  productCounter: HTMLElement,
  bookName: string,
  deleteBtn: HTMLElement,
  counterCart: HTMLElement
): string[] {
  productCounter.innerHTML = `${+productCounter.innerHTML - 1}`;
  let shoppingCart: string[] = JSON.parse(localStorage.getItem('shoppingCart') as string) as string[];
  shoppingCart = [
    ...shoppingCart.slice(0, shoppingCart.lastIndexOf(bookName)),
    ...shoppingCart.slice(shoppingCart.lastIndexOf(bookName) + 1, shoppingCart.length),
  ];
  localStorage.setItem('shoppingCart', JSON.stringify(shoppingCart));
  counterCart.innerHTML = `${shoppingCart.length}`;

  if (productCounter.innerHTML === '0') {
    deleteBtn.remove();
    productCounter.remove();
    if (shoppingCart.length === 0) {
      counterCart.remove();
    }
  }
  return shoppingCart;
}

export default removeFromCart;
