const express = require("express");
const router = express.Router();
const User = require("../models/userModel");

const bcrypt = require("bcrypt");
const Post = require("../models/recipeModel");
const multer = require("multer");
const path = require("path");

//CREATE
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, path.join(__dirname, "..", "images", "recipe"));
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + "_" + file.originalname);
  },
});
const upload = multer({ storage: storage });

router.post("/create", upload.single("photo"), async (req, res) => {
  try {
    const { title, ingredients, instructions } = req.body;
    const photo = req.file ? req.file.filename : null;
    const newPost = new Post({ title, ingredients, photo, instructions });
    const savedPost = await newPost.save();
    res.status(201).json(savedPost);
  } catch (error) {
    console.error("Error creating post:", error);
    res
      .status(400)
      .json({ message: "Failed to create post", error: error.message });
  }
});

//UPDATE

router.put("/:id", async (req, res) => {
  try {
    const updatePost = await Post.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true }
    );

    if (!updatePost) {
      return res.status(404).json({ error: "Post not found" });
    }

    res.status(200).json(updatePost);
  } catch (err) {
    res.status(500).json(err);
  }
});

//DELETE

router.delete("/:id", async (req, res) => {
  try {
    await Post.findByIdAndDelete(req.params.id);
    await Comment.deleteMany({ postId: req.params.id });
    res.status(200).json("post has been deleted");
  } catch (err) {
    res.status(500).json(err);
  }
});

//GET POST DETAILS

router.get("/:id", async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    res.status(200).json(post);
  } catch (err) {
    res.status(500).json(err);
  }
});

//GET POST

router.get("/", async (req, res) => {
  const query = req.query;
  console.log(query);
  try {
    const searchFilter = {
      title: { $regex: query.search, $options: "i" },
    };
    const posts = await Post.find(query.search ? searchFilter : null);
    res.status(200).json(posts);
  } catch (err) {
    res.status(500).json(err);
  }
});

//GET POST

router.get("/user/:userID", async (req, res) => {
  try {
    const posts = await Post.find({ userID: req.params.userID });
    res.status(200).json(posts);
  } catch (err) {
    res.status(500).json(err);
  }
});

//SEARCH POSTS

module.exports = router;
