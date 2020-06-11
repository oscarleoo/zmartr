
export default (list) => {
  if (list.length >= 5) {
    return list;
  }

  return [...list, { index: 0, setting: {} }];
};
