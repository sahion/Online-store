import IChildElement from '../interfaces/IChildElement';

function createElement(parent: HTMLElement, child: IChildElement): HTMLElement | HTMLImageElement {
  const element = document.createElement(child.type);
  element.classList.add(...child.classList);
  parent.append(element);

  if (child.value) {
    element.innerHTML = child.value;
  }

  return element;
}

export default createElement;
