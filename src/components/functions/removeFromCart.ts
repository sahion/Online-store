function removeFromCart(
  shoppingCart: string[],
  productCounter: HTMLElement,
  bookName: string,
  deleteBtn: HTMLElement,
  counterCart: HTMLElement
): string[] {
  productCounter.innerHTML = `${+productCounter.innerHTML - 1}`;
  shoppingCart = [
    ...shoppingCart.slice(0, shoppingCart.lastIndexOf(bookName)),
    ...shoppingCart.slice(shoppingCart.lastIndexOf(bookName) + 1, shoppingCart.length),
  ];
  counterCart.innerHTML = `${shoppingCart.length}`;

  if (productCounter.innerHTML === '0') {
    productCounter.remove();
    deleteBtn.remove();
  }
  return shoppingCart;
}

export default removeFromCart;
