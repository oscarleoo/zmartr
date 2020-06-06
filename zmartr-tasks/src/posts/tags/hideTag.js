import { ObjectId } from 'mongodb';
import Tag from '../../documents/Tag';

const hideTag = (tagId, userId) => (
  Tag.updateOne({ _id: ObjectId(tagId), userId }, { hidden: true })
);

export default hideTag;
