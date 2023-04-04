const map = new WeakMap();

let ob = new ResizeObserver((entries) => {
  for (let entrie of entries) {
    const hander = map.get(entrie.target);
    if (hander) {
      const data = Array.isArray(entrie.contentBoxSize)
        ? entrie.contentBoxSize[0]
        : entrie.contentBoxSize;
      hander({
        width: data.inlineSize,
        height: data.blockSize,
      });
    }
  }
});

export default {
  mounted: (el, binding) => {
    ob.observe(el);
    map.set(el, binding.value);
  },
  unmounted: (el) => {
    ob.unobserve(el);
  },
};
