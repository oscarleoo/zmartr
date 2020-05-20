import Tag from '../../documents/Tag';

const createTag = async (tag, color, userId) => {
  await Tag({ tag, color, userId }).save();
  return Tag.find({ userId });
};

export default createTag;
