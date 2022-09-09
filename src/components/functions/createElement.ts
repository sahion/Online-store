import IChildElement from '../interfaces/IChildElement';

function createElement<T extends HTMLElement>(parent: HTMLElement | null, child: IChildElement): T {
  const element = <T>document.createElement(child.type);
  element.classList.add(...child.classList);
  parent?.append(element);

  if (child.value) {
    element.innerHTML = child.value;
  }

  return element;
}

export default createElement;
