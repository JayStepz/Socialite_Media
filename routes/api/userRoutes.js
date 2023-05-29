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

// /api/users
    // get all users
    router.route('/users').get(getUsers);
    // get single user by id with thoughts and friends data
    router.route('/users/:userId').get(getUser);
    // post new user
    router.route('/users/add').post(createUser);
    // put to update user by _id
    router.route('/users/update/:userId').put(updateUser);
    // delete to remove user and user's thoughts by _id
    router.route('/users/delete/:userId').delete(deleteUser);

// /api/users/:userId/friends/:friendId
    // post to add a new friend to user's friend list
    router.route('users/:userId/friends/add/:friendId').post(addFriend);
    // delete to remove a friend from user's friend list
    router.route('users/:userId/friends/remove/:friendId').delete(deleteFriend);