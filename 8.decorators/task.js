//Задача № 1
function cachingDecoratorNew(func) {
  let cache = [];
  const maxCacheValuesCount = 5;
  return (...args) => {
    const hash = args.join(',');
    console.log(hash);
    let objectInCache = cache.find(obj => obj.hasOwnProperty(hash));
    if(objectInCache) {
      const cachedValue = objectInCache[hash];
      console.log("Из кеша: " + cachedValue);
      return "Из кеша: " + cachedValue;
    }
    const result = func(...args);
    if(cache.length >= maxCacheValuesCount) {
      cache.shift();
      cache.push({[hash]: result});
      console.log("Вычисляем: " + result);
      return "Вычисляем: " + result;
    }
    
    cache.push({[hash]: result});
    console.log("Вычисляем: " + result);
    return "Вычисляем: " + result;
  };
}

// Решение эксперта
// function cachingDecoratorNew(func) {
//   let cache = [];
//   const maxCacheValuesCount = 5;
//   return (...args) => {
//     const hash = md5(args);
//     const objectFromCache = cache.find(object => object.hash === hash);
//     if (objectFromCache){
//       console.log("Из кеша: ", objectFromCache.value);
//       return "Из кеша: " + objectFromCache.value;
//     }

//     const value = func(...args);
//     cache.push({hash, value})
//     if(cache.length > maxCacheValuesCount) {
//       cache.shift();
//     }

//     console.log("Вычисляем: ", value);
//     return "Вычисляем: " + value;
//   };
// }

//Задача № 2
function debounceDecoratorNew(func, delay) {
  let timeoutId = null;
  wrapper.count = 0;
  wrapper.allCount = 0;

  function wrapper(...args) {
    wrapper.allCount++;

    if (!timeoutId) {
      func(...args);
      wrapper.count++;
    }

    clearTimeout(timeoutId);

    timeoutId = setTimeout(() => {
      func(...args);
      timeoutId = null;
    }, delay);
  }

  return wrapper;
}
