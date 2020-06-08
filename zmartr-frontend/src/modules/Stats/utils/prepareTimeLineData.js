
export default () => {
  const data = {};
  const today = new Date();
  for (let i = 0; i < 50; i += 1) {
    const date = new Date(today - i * 1000 * 3600 * 24);
    const key = `${date.getFullYear()}-${date.getMonth()}-${date.getDate()}`;
    data[key] = {
      day: key,
      time: 0,
      date,
    };
  }

  return data;
};
