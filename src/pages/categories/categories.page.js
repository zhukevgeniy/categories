import { CategoryItem } from "../categories/components/category-item/category-item.component";
import { CategoryService } from "../../services/category-service";

class CategoriesPage extends HTMLElement {
  constructor() {
    super();
  }

  async connectedCallback() {
    const categories = await CategoryService.getCategories();

    this.innerHTML = categories
      .map(category => `
        <category-item categoryId=${category.id} title=${category.title}></category-item>
      `).join('')
  }
}

customElements.define('categories-page', CategoriesPage);

export { CategoriesPage };
