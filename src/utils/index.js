// 表单序列化
export const serialize = (data) => {
  let list = [];
  Object.keys(data).forEach((ele) => {
    list.push(`${ele}=${data[ele]}`);
  });
  return list.join('&');
};

/**@function 滚动文字 */

export const rollText = (text) => {};
