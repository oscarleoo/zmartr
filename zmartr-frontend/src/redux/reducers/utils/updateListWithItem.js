
export default (list, item) => list.map((listItem) => {
  if (listItem._id === item._id) {
    return {
      ...item,
    };
  }
  return listItem;
});
