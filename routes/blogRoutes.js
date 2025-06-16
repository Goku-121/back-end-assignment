const express = require('express');
const {
  createBlog, getBlogs, updateBlog, deleteBlog
} = require('../controllers/blogController');
const auth = require('../middleware/authMiddleware');
const router = express.Router();

router.post('/', auth, createBlog);
router.get('/', auth, getBlogs);
router.put('/:id', auth, updateBlog);
router.delete('/:id', auth, deleteBlog);

module.exports = router;
