class CategoryPage extends HTMLElement {
  constructor() {
    super();

    this.innerText = 'Category page'
  }
}

customElements.define('category-page', CategoryPage);

export { CategoryPage };
