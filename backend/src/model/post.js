import mongoose from 'mongoose';

const {Schema} = mongoose;
// const obj = {
//     title: String,
//     body: String,
//     tags: [String],
//     publishedDate: {
//         type: Date,
//         default: Date.now
//     }
// };
// const PostSchema = new Schema(obj);
const PostSchema = new Schema({
    title: String,
    body: String,
    tags: [String], //String[]
    publishedDate: {
        type: Date,
        default: Date.now
    },
});




const Post = mongoose.model('Post', PostSchema);

export default Post;