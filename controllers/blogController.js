const Blog = require('../models/Blog');

exports.createBlog = async (req, res) => {
  const blog = new Blog({ ...req.body, author: req.user.id });
  await blog.save();
  res.json(blog);
};

exports.getBlogs = async (req, res) => {
  const blogs = await Blog.find().populate('author', 'username');
  res.json(blogs);
};

exports.updateBlog = async (req, res) => {
  const blog = await Blog.findOneAndUpdate(
    { _id: req.params.id, author: req.user.id },
    req.body,
    { new: true }
  );
  res.json(blog);
};

exports.deleteBlog = async (req, res) => {
  await Blog.findOneAndDelete({ _id: req.params.id, author: req.user.id });
  res.json({ message: 'Blog deleted' });
};
