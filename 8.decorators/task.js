function cachingDecoratorNew(func) {
  let cache = [];
  function wrapper(...args) {
      const key = args.join(',');
      const itemCache = cache.find((item) => item.hasOwnProperty(key));
      if (itemCache !== undefined) {
          console.log(`Из кэша: ${itemCache[key]}`);
          return `Из кэша: ${itemCache[key]}`;
      } else {
          let result = func(...args);
          if (cache.length === 5) cache.shift();
          cache.push({[key]: result,});
          console.log(`Вычисляем: ${result}`);
          return `Вычисляем: ${result}`;
      }
  }
  return wrapper;
}


function debounceDecoratorNew(func, ms) {
  let inTimer = false;
  let timer = null;

  function wrapper(...args) {
      if (inTimer) {
          clearTimeout(timer);
          timer = setTimeout(() => {
              inTimer = false;
              func(...args);
          }, ms);
      } else {
          inTimer = true;
          timer = setTimeout(() => {
              inTimer = false;
              func(...args);
          }, ms);
          return func(...args);
      }
  }
  return wrapper;
}

function debounceDecorator2(func) {
  wrapper.count = 0;
  function wrapper(...args) {
      wrapper.count += 1;
      return func(...args);
  }
  return wrapper;
}
