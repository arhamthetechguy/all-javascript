function helper() {
  const countNum = (num) => {
    let result = 0;
    if (num >= 1000000) {
      const cal = num / 1000000;
      const fixedResult = cal.toFixed(1);
      result = fixedResult + "M";
    } else if (num >= 100000) {
      const cal = num / 100000;
      const fixedResult = cal.toFixed(1);
      result = fixedResult + "Lakh";
    } else if (num >= 1000) {
      const cal = num / 1000;
      const fixedResult = cal.toFixed(1);
      result = fixedResult + "K";
    } else {
      result = num;
    }
    return result;
  };

  async function get(url) {
    const res = await fetch(url);
    const data = res.json();

    return data;
  }

  const post = (url, data) => {
    return fetch(url, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    }).then((res) => res.json);
  };

  const forEach = (array, cbf) => {
    for (let i = 0; array.length > i; i++) {
      cbf(array[i], i, array);
    }
  };

  const map = (marr, mfun) => {
    const newArray = [];
    for (let i = 0; marr.length > i; i++) {
      const result = mfun(marr[i], i, marr);
      newArray.push(result);
    }
    return newArray;
  };

  return {
    countNum,
    get,
    post,
    forEach,
    map,
  };
}

const helpFun = helper();
export default helpFun;
