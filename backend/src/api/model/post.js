import mongoose from 'mongoose';

const {Schema} = mogoose;
const obj = {
    title: String,
    body: String,
    tags: [String],
    publishedDate: {
        typd: Date,
        default: Date.now
    }
};
const PostSchema = new Schema(obj);
const Post = mongoose.model('Post', PostSchema);

export default Post;