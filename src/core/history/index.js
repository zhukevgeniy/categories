const history = new Proxy(window.history, {
  get(target, propKey, receiver) {
    const originMethod = target[propKey];

    if (propKey !== "pushState") {
      return originMethod;
    }

    return function patchedPushState(data, title, url) {
      if (typeof receiver.onpushstate === "function") {
        receiver.onpushstate({ data, title, url });
      }

      return originMethod.apply(window.history, [data, title, url]);
    };
  },
});

export { history };
