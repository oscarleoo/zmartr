
export default (list, itemId) => {
  const taskActions = list.filter((listItem) => listItem._id === itemId);
  if (taskActions[1].type === 'Started') {
    return list.map((listItem) => {
      if (listItem._id === itemId && ['Finished', 'Archived'].indexOf(listItem.type) >= 0) {
        return {
          ...listItem,
          type: 'Stopped',
        };
      }

      return listItem;
    });
  }

  return list.filter((listItem) => (
    listItem._id !== itemId || ['Finished', 'Archived'].indexOf(listItem.type) < 0
  ));
};
