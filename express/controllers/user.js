const schema = require('async-validator').default;
const userService = require('../services/user.js')

const userController = {
  authPassword: async function (req, res) {
    const form = {
      phone: req.body.phone,
      password: req.body.password,
    }
    const validator = new schema({
      phone: { type: 'string', required: true },
      password: { type: 'string', required: true },
    })
    try {
      await validator.validate(form);
      const userInfo = await userService.authorize(form);
      const token = await userService.token(userInfo.id);
      res.json({ error_code: 0, data: { token } });
    } catch (e) {
      console.log(e.message, 500)
      res.status(500).json({ error_code: 1, message: e.message || e.errors || e.errmsg })
    }
  },

  authSMS: async function (req, res) {
    const form = {
      phone: req.body.phone,
      sms: req.body.code,
    }
    const validator = new schema({
      phone: { type: 'string', required: true },
      sms: { type: 'string', required: true },
    })
    try {
      await validator.validate(form)
      const userInfo = await userService.authorize(form);
      const token = await userService.token(userInfo.id);
      res.json({ error_code: 0, data: { token } });
    } catch (e) {
      console.log(e.message, 500)
      res.status(500).json({ error_code: 1, message: e.message || e.errors || e.errmsg })
    }
  },
}

module.exports = userController;