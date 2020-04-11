import categoriesData from "../data/categories";

class CategoryService {
  static async getCategories() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(categoriesData.categories);
      }, 300);
    });
  }
}

export { CategoryService };
