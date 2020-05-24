import Tag from '../../documents/Tag';

const createTag = (tag, color, userId) => Tag.findOneAndUpdate(
  { tag, userId },
  { color },
  { upsert: true, new: true },
);

export default createTag;
