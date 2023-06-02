const { User, Thought } = require('../models');

module.exports = {
  // Get all thoughts
  getThoughts(req, res) {
    Thought.find()
      .then((thoughts) => res.json(thoughts))
      .catch((err) => res.status(500).json(err));
  },

  // Get a thought
  getThought(req, res) {
    Thought.findOne({ _id: req.params.thoughtId })
      .select('-__v')
      .then((thought) =>
        !thought
          ? res.status(404).json({ message: 'No thought with that ID' })
          : res.json(thought)
      )
      .catch((err) => res.status(500).json(err));
  },

  // Create a thought
  postThought(req, res) {
    Thought.create( 
      { _id: req.params.userId },
      { $addToSet: { thoughts: req.body } },
      {runValidators: true, new: true }
      )
      .then((thought) => res.json(thought))
      .catch((err) => res.status(500).json(err));
  },

  // Delete a thought
  deleteThought(req, res) {
    Thought.findOneAndDelete({ _id: req.params.thoughtId })
      .then((thought) =>
        !thought
          ? res.status(404).json({ message: 'No thought with that ID' })
          : Thought.deleteMany({ _id: { $in: user.thought } })
      )
      .then(() => res.json({ message: 'Course and students deleted!' }))
      .catch((err) => res.status(500).json(err));
  },

  // Update a thought
  updateThought(req, res) {
    Thought.findOneAndUpdate(
      { _id: req.params.thoughtId },
      { $set: req.body },
      { runValidators: true, new: true }
    )
      .then((thought) =>
        !thought
          ? res.status(404).json({ message: 'No thought with this id!' })
          : res.json(thought)
      )
      .catch((err) => res.status(500).json(err));
  },

  createReact(req, res) {
      Thought.findOneAndUpdate(
        { _id: req.params.thoughtId },
        { $addToSet: { reactions: req.body } },
        { runValidators: true, new: true }
      )
        .then((react) =>
          !react
            ? res
                .status(404)
                .json({ message: 'No thought found with that ID :(' })
            : res.json(react))
        .catch((err) => res.status(500).json(err));
    },

    deleteReact(req, res) {
      Thought.findOneAndUpdate(
        { _id: req.params.reactionId },
        { $pull: { reactions: { reactionId: req.params.thoughtId } } },
        { runValidators: true, new: true }
      )
        .then((react) =>
          !react
            ? res
                .status(404)
                .json({ message: 'No reaction found with that ID :(' })
            : res.json(react)
        )
        .catch((err) => res.status(500).json(err));
    }, 
};
