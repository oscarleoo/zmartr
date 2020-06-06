import Tag from '../../documents/Tag';

const createTag = (text, userId) => Tag({ tag: text, color: '#a0a0a0', userId }).save();

export default createTag;
