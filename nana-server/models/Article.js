const mongoose = require("mongoose");

const articleSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },

    name: {
      type: String,
      required: true,
      unique: true,
    },

    image: {
      type: String,
      required: true,
    },

    content: {
      type: [String],
      required: true,
    },

    createdBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },

    authorName: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  },
);

module.exports =
  mongoose.models.Article || mongoose.model("Article", articleSchema);
