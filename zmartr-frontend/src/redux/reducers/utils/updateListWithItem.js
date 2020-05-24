
export default (list, item) => {
  const hasTempId = list.filter((listItem) => listItem._id === 'tempId').length > 0;
  const containsId = list.filter((listItem) => listItem._id === item._id).length > 0;
  console.log('updateList ==> ', hasTempId, containsId)

  if (hasTempId && !containsId) {
    return [...list.filter((listItem) => listItem._id !== 'tempId'), item];
  }

  return list.map((listItem) => {
    if (listItem._id === item._id) {
      return {
        ...item,
      };
    }
    return listItem;
  });
};
