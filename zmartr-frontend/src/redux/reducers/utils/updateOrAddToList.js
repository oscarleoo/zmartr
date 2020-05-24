
export default (list, item) => {
  let isInList = false;
  const updatedList = list.map((listItem) => {
    if (listItem._id === item._id) {
      isInList = true;
      return {
        ...item,
      };
    }
    return listItem;
  });

  if (!isInList) {
    updatedList.push(item);
  }

  return updatedList.sort((a, b) => (a.tag > b.tag ? 1 : -1));
};
