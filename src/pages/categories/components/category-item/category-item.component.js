import { history } from "../../../../core/history";

class CategoryItem extends HTMLElement {
  constructor() {
    super();

    this.addEventListener('click', this.goToCategoryPage);
  }

  connectedCallback() {
    const title = this.getAttribute('title');

    this.innerHTML = `<div>${title}</div>`
  }

  goToCategoryPage() {
    const categoryId = this.getAttribute('categoryId');

    history.pushState(null, 'categy', `/category/${categoryId}`);
  }
}

customElements.define('category-item', CategoryItem);

export { CategoryItem };
