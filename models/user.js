const mongoose = require("mongoose"),
  passportLocalMongoose = require("passport-local-mongoose");

const userSchema = new mongoose.Schema({
  firstName: {
    type: String,
    trim: true,
  },
  lastName: {
    type: String,
    trim: true,
  },
  username: {
    type: String,
    trim: true,
  },
  email: {
    type: String,
    trim: true,
  },
  password: String,
  joined: { type: Date, default: Date.now() },
  booklist: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Book",
    }
  ],
  bookIssueInfo: [
    {
      book_info: {
        id: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "Issue",
        },
      },
    },
  ],
  wishlist: [
    {
          type: mongoose.Schema.Types.ObjectId,
          ref: "Book",
    },
  ],
  gender: String,
  address: String,
  image: {
    type: String,
    default: "",
  },
  violationFlag: { type: Boolean, default: false },
  fines: { type: Number, default: 0 },
  isAdmin: { type: Boolean, default: false },
});

userSchema.plugin(passportLocalMongoose);

module.exports = mongoose.model("User", userSchema);
