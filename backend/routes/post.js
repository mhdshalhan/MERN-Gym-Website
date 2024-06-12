// const express = require("express");
// const {
//   isAuthenticatedUser,
//   authorizeRoles,
// } = require("../middlewares/authenticate");
// const {
//   createPost,
//   updatePost,
//   deletePost,
//   getSinglePost,
//   getpostss,
//   getbyuser,
//   createComment,
//   updateComment,
//   deleteComment,
//   getPostComment,
// } = require("../controllers/postController");
// const router = express.Router();

// router.route("/newpost").post(isAuthenticatedUser, createPost);
// router.route("/post/update/:id").put(isAuthenticatedUser, updatePost);
// router.route("/post/delete/:id").delete(isAuthenticatedUser, deletePost);
// router.route("/post/:id").get(isAuthenticatedUser, getSinglePost);
// router.route("/post").get(isAuthenticatedUser, getpostss);
// router.route("/user/:userId").get(isAuthenticatedUser, getbyuser);

// //comments

// router.route("/comment").post(isAuthenticatedUser, createComment);
// router.route("/comment/:id").put(isAuthenticatedUser, updateComment);
// router.route("/comment/:id").delete(isAuthenticatedUser, deleteComment);
// router.route("/comment/:postId").delete(isAuthenticatedUser, getPostComment);

// module.exports = router;
