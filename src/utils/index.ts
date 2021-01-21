/**
 * 节流
 */
export function throttle<T = any>(fn: (...arg: T[]) => void, delay = 2000) {
  let prevTime = Date.now();
  let _args: T[] = null;
  let timer: NodeJS.Timeout = null;
  let _this: any = null;

  return function (...arg: T[]) {
    const nowTime = Date.now();
    _args = arg;
    _this = this;

    if (nowTime - prevTime >= delay) {
      console.log("运行了");
      timer = setTimeout(() => {
        fn.apply(_this, _args);
        clearTimeout(timer);
      }, delay);
      prevTime = nowTime;
    }
  };
}

/**
 * 防抖
 */
export function debounce<T = any>(fn: (...arg: T[]) => void, delay = 1000) {
  let timer: NodeJS.Timeout = null;
  return function (...args: T[]) {
    if (timer) clearTimeout(timer);

    timer = setTimeout(() => {
      fn.apply(this, args);
      clearTimeout(timer);
    }, delay);
  };
}
