const mongoose = require('mongoose');
const Schema = mongoose.Schema;

CATEGORIES = (
    ('N', 'Nature'),
    ('F', 'Food'),
    ('A', 'Animals'),
    ('S', 'Structure and Objects'),
    ('P', 'People and Life'),
    ('H', 'Humor')
)

const contestSchema = new Schema({
    title: String,
    description: String,
    startDate: Date,
    img: { data: Buffer, contentType: String },
    posts: [postSchema]
}, {
    timestamps: true
})

const postSchema = new Schema({
    title: String,
    description: String,
    category: {type: String, default: 'N'},
    img: { data: Buffer, contentType: String },
    comments: [commentSchema],
    likes: Number
}, {
    timestamps: true
})

const commentSchema = new Schema({
    description: String,
    likes: Number
})

module.exports = mongoose.model('Contest', contestSchema);