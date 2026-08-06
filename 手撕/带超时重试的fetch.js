async function myFetch(retrytimes, timeout) {
  let retryCount = 0;
  return new Promise((resolve, reject) => {
    const run = () => {
      const controller = new AbortController();
      const timer = setTimeout(() => controller.abort(), timeout);
      fetch(url, { signal: controller.signal, ...args }).then((res)=>{
        clearTimeout()
      }).catch((err)=>{
        //
      });
    };
  });
}
