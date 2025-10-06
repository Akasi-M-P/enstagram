// CUSTOM MODULES
const Post = require("./../models/postModel");

// GET ALL POST FROM API
exports.getAllPosts = async (req, res) => {
  try {
    console.log(req.query);
    // GET A COPY OF THE QUERY OBJECT AND ASSIGN IT TO A VARIABLE
    const queryObj = { ...req.query };

    // GROUP QUERY FIELDS INTO AN ARRAY AND ASSIGN THEM TO A VARIABLE
    const excludeFields = ["page", "sort", "limit", "fields"];

    // DELETE EACH QUERY FIELD IN THE EXCLUDE FIELDS ARRAY FROM THE QUERY OBJECT
    excludeFields.forEach((el) => delete queryObj[el]);

    // ADD >=,>,<=,< TO QUERY FILTERING
    let queryStr = JSON.stringify(queryObj);
    queryStr = queryStr.replace(/\b(gte|gt|lte|lt)\b/g, (match) => `$${match}`);

    let query = Post.find(JSON.parse(queryStr));

    // FILTER QUERY BY SORTING
    if (req.query.sort) {
      const sortBy = req.query.sort.split(",").join(" ");

      query = query.sort(sortBy);
    } else {
      query = query.sort("-createdAt");
    }

    // LIMITING FIELDS SO THAT ONLY SELECT FIELDS WILL BE SENT AS RESPONSE AND DESELECTED FIELDS WITH (-) WILL BE EXCLUDE FROM RESPONSE AS WELL
    if (req.query.fields) {
      const fields = req.query.fields.split(",").join(" ");
      query = query.select(fields);
    } else {
      query = query.select("-__v");
    }

    const posts = await query;
    res.status(200).json({
      results: posts.length,
      success: true,
      data: {
        posts,
      },
    });
  } catch (error) {
    res.status(400).json({
      status: "fail",
      message: error.message,
    });
  }
};

// GET SINGLE POST FROM API
exports.getPost = async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);

    res.status(200).json({
      status: "success",
      data: {
        post,
      },
    });
  } catch (error) {
    res.status(400).json({
      status: "fail",
      message: error.message,
    });
  }
};

// ADD A POST TO THE API
exports.createPost = async (req, res) => {
  try {
    const newPost = await Post.create(req.body);
    res.status(201).json({
      status: "success",
      data: {
        post: newPost,
      },
    });
  } catch (error) {
    res.status(400).json({
      status: "fail",
      message: error.message,
    });
  }
};

// UPDATE A POST
exports.updatePost = async (req, res) => {
  try {
    const post = await Post.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    res.status(200).json({
      status: "success",
      data: {
        post,
      },
    });
  } catch (error) {
    res.status(400).json({
      status: "fail",
      message: error.message,
    });
  }
};

// DELETE A POST FROM THE API
exports.deletePost = async (req, res) => {
  try {
    await Post.findByIdAndDelete(req.params.id);
    res.status(204).json({
      status: "success",
      data: null,
    });
  } catch (error) {
    res.status(404).json({
      status: "fail",
      message: error.message,
    });
  }
};
