const mongoose = require('mongoose')
const { Schema } = mongoose;

const newsSchema = new Schema({
  imageSrc: {
    type: String,
    required: true,
  },
  heading: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  }
});

module.exports =  mongoose.model("news", newsSchema);