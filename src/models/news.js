const mongoose = require("mongoose");

const NewsSchema = new mongoose.Schema(
  {
    title: {
        type: String,
        required: true,
    },
    subtitle: {
        type: String,
    },
    content: {
        type: String,
    },
    image: {
        type: Buffer,
    },
    newsType: {
        type: String
    }
  },
  {
    timestamps: true,
  }
);

const News = mongoose.model("News", NewsSchema);

module.exports = News;
