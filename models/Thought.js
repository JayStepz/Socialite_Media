const { Schema, model } = require('mongoose');

// Schema to create a course model
const thoughtSchema = new Schema(
  {
    thoughtText: {
        type: String,
        required: true,
        min_length: 1,
        max_length: 280,
    },
    createdAt: {
        type: Date, 
        default: Date.now,
        // use getter method to format timestamp on query
    },
    userName: {
        type: String,
        required: true,
    },
    reactions: {
        // array of nested documents created with reactionSchema
        // subdocument schema "Reaction"
        reactionId: {
            // use ObjectId data type
            type: Schema.Types.ObjectId,
            ref: 'Thought',
            // set default value to a new ObjectId
        },
        reactionBody: {
            type: String,
            required: true,
            // 280 character max
            min_length: 1,
            max_length: 280,
        },
        username: {
            type: String,
            required: true,
        },
         createdAt: {
            type: Date,
            default: Date.now(),
            // use getter method to format timestamp on query
        },
    },
  },
  {
    toJSON: {
      virtuals: true,
    },
  }
);

thoughtSchema.virtual('reactionCount').get(function () {
  return this.reactions.length;
});

const Thought = model('thought', thoughtSchema);

module.exports = Thought;