const router = require('express').Router();
const {
    getThoughts,
    getThought,
    postThought,
    updateThought,
    deleteThought,
    createReact,
    deleteReact,
  } = require('../../controllers/userControl');


// /api/thoughts
    // get all thoughts
    router.route('/thoughts').get(getThoughts);
    // get single thought by _id
    router.route('/thoughts/:thoughtId').get(getThought);
    // post to create new thought (push thought's _id to user's thoughts array)
    router.route('/thoughts/new').post(postThought);
    // put to update a thought by _id
    router.route('/thoughts/update/:thoughtId').put(updateThought);
    // delete to remove a thought by _id
    router.route('/thoughts/delete/:thoughtId').delete(deleteThought);

// /api/thoughts/:thoughtId/reactions
    // post to create a reaction stored in a single thought's reactions array
    router.route('thoughts/:thoughtId/reactions/add').post(createReact);
    // delete to pull and remove a reaction by reaction's reactionId
    router.route('thoughts/:thoughtId/reactions/delete/:reactionId').delete(deleteReact);