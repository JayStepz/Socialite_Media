const router = require('express').Router();
const {
    getThoughts,
    getThought,
    postThought,
    updateThought,
    deleteThought,
    createReact,
    deleteReact,
  } = require('../../controllers/thoughtControl');


// '/'
    // get all thoughts
    router.route('/').get(getThoughts);
    // get single thought by _id
    router.route('/:thoughtId').get(getThought);
    // post to create new thought (push thought's _id to user's thoughts array)
    router.route('/new').post(postThought);
    // put to update a thought by _id
    router.route('/update/:thoughtId').put(updateThought);
    // delete to remove a thought by _id
    router.route('/delete/:thoughtId').delete(deleteThought);

// '/:thoughtId/reactions'
    // post to create a reaction stored in a single thought's reactions array
    router.route('/:thoughtId/reactions/add').post(createReact);
    // delete to pull and remove a reaction by reaction's reactionId
    router.route('/:thoughtId/reactions/delete/:reactionId').delete(deleteReact);

module.exports = router;