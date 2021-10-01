const mongoose = require('mongoose');
const Schema = require('schema');

const Post = new Schema({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String
  },
  url : {
    type: String
  },
  status: {
    type: String,
    enum: ['TO LEARN', 'LEARNING', 'LEARNED']
  },
  user: {
    type: Schema.Types.ObjectId,
    ref: 'user'
  }
})

module.exports = mongoose.model('post', PostSchema)