require('dotenv').config()
const User = require('../models/user.js');
const JWT = require('jsonwebtoken');
const JWT_SECRET = process.env.JWT_SECRET;

const userService = {
  authorize: async function (form) {
    let user = await User.first(form);
    if (!user) {
      throw new Error("账号/密码/验证码错误");
    }
    return {
      id: user.id,
    };
  },
  token: async function (userId) {
    return JWT.sign({
      user_id: userId,
    }, JWT_SECRET, {
      expiresIn: '360d'
    });
  },
}

module.exports = userService;

