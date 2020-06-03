import Tag from '../../documents/Tag';

const validateColor = (color) => {
  if (color.length !== 7) {
    return '#a0a0a0';
  }
  if (color[0] !== '#') {
    return '#a0a0a0';
  }
  for (let i = 1; i < 7; i += 1) {
    if ('0123456789abcdef'.indexOf(color[i].toLowerCase()) < 0) {
      return '#a0a0a0';
    }
  }

  return color;
};


const createTag = (tag, color, userId) => Tag.findOneAndUpdate(
  { tag, userId },
  { color: validateColor(color) },
  { upsert: true, new: true },
);

export default createTag;
