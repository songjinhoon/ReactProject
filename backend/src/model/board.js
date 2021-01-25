import mongoose, {Schema} from 'mongoose';

const BoardSchema = new Schema({
    title: String,
    //tags: [String],
    content: String,
    publishedDate: {
        type: Date,
        default: Date.now
    },
    user: {
        _id: mongoose.Types.ObjectId,
        username: String
    }
});

const Board = mongoose.model('Board', BoardSchema);

export default Board;