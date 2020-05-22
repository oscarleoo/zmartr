
export default (list, items) => list.map((listItem) => {
  for (let i = 0; i < items.length; i += 1) {
    if (items[i] && listItem._id === items[i]._id) {
      return { ...items[i] };
    }
  }

  return listItem;
});
