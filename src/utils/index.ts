/**
 * 节流
 */
export function throttle<T = any>(fn: (...arg: T[]) => void, delay = 2000) {
  let prevTime = Date.now();
  let _args: T[] = null;
  let timer: NodeJS.Timeout = null;
  let _this: any = null;
  const canRunTimeout = false;

  return function (...arg: T[]) {
    console.log("走你");

    const nowTime = Date.now();
    _args = arg;
    _this = this;

    const startTimeout = () => {
      timer = setTimeout(() => {
        fn.apply(_this, _args);
        clearTimeout(timer);
      }, delay);
    };

    // if (!timer) {
    //   // 没有运行过则直接开启定时器
    //   startTimeout();
    //   return;
    // }

    console.log("prevTime", prevTime);
    console.log("nowTime", nowTime);
    console.log("during", nowTime - prevTime);

    console.log(nowTime - prevTime >= delay);

    if (prevTime + delay >= nowTime) {
      console.log("运行了");
      startTimeout();
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
