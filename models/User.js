const { Schema, model } = require('mongoose');
const thoughtSchema = require('./Thought');

// Schema to create a course model
const userSchema = new Schema(
  {
    userName: {
        type: String,
        unique: true,
        required: true,
        trimmed: true,
        max_length: 16,
    },
    email: {
      type: String,
      unique: true,
      required: true,
      trimmed: true,
      validate: {
        validator: function (value) {
          const emailRegex = /^[\w\-\.]+@([\w-]+\.)+[\w-]{2,}$/;
          return emailRegex.test(value);
        },
        message: 'Invalid email address',
      },
    },
    thoughts: [thoughtSchema],
    friends: [userSchema],
  },
  {
    toJSON: {
      virtuals: true,
    },
  }
);

userSchema.virtual('friendCount').get(function () {
  return this.friends.length;
});

const User = model('user', userSchema);

module.exports = User;