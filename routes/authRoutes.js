const express = require('express');
const { signup, login } = require('../controllers/authController');
const router = express.Router();

router.post('/signup', signup);
router.post('/login', login);
router.get('/protected', authMiddleware, (req, res) => {
  res.status(200).json({ message: 'You have accessed a protected route', user: req.user });
});
module.exports = router;
