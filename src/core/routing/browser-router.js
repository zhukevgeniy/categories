import { history } from "../history";

class BrowserRouter extends HTMLElement {
  constructor() {
    super();
    this.routes = new Map();

    history.onpushstate = (evt) => this.renderCurrentRoute(evt.url);
    window.onpopstate = () =>
      this.renderCurrentRoute(document.location.pathname);
  }

  connectedCallback() {
    for (const children of this.children) {
      const path = children.getAttribute("path");
      const pageEl = children.firstElementChild;

      this.routes.set(path, pageEl);
    }

    this.renderCurrentRoute(window.location.pathname);
  }

  renderCurrentRoute(url) {
    for (const [path, component] of this.routes.entries()) {
      component.hidden = path !== url;
    }
  }
}

customElements.define("browser-router", BrowserRouter);

export { BrowserRouter };
