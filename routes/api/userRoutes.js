const router = require('express').Router();
const {
    getUsers,
    getUser,
    createUser,
    updateUser,
    deleteUser,
    addFriend,
    deleteFriend,
  } = require('../../controllers/userControl');

// '/'
    // get all users
    router.route('/').get(getUsers);
    // get single user by id with thoughts and friends data
    router.route('/:userId').get(getUser);
    // post new user
    router.route('/add').post(createUser);
    // put to update user by _id
    router.route('/update/:userId').put(updateUser);
    // delete to remove user and user's thoughts by _id
    router.route('/delete/:userId').delete(deleteUser);

// '/:userId/friends/:friendId'
    // post to add a new friend to user's friend list
    router.route('/:userId/friends/add/:friendId').post(addFriend);
    // delete to remove a friend from user's friend list
    router.route('/:userId/friends/remove/:friendId').delete(deleteFriend);

module.exports = router;