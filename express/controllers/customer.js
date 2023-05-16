const Customer = require('../models/customer.js');

const customerController = {
  index: async function (req, res, next) {
    let user_id = res.locals.user_id || 1;
    if (!user_id) {
      res.status(500).json({ error_code: 1, message: '缺少必要参数' })
      return
    }
    try {
      let customers = await Customer.where({ user_id, });
      res.json({ error_code: 0, data: { customers } })
    } catch (e) {
      res.status(500).json({ error_code: 1, message: e.message })
    }
  },

  insert: async function (req, res, next) {
    let name = req.body.name;
    let address = req.body.address;
    let password = req.body.password;
    let user_id = res.locals.user_id || 1;
    let created_time = new Date();
    if (!name || !user_id) {
      res.status(500).json({ error_code: 1, message: '缺少必要参数' })
      return
    }
    try {
      const customer = await Customer.insert({ password, address, name, user_id, created_time });
      res.json({ error_code: 0, data: { customer } })
    } catch (e) {
      res.status(500).json({ error_code: 1, message: e.message })
    }
  },

  update: async function (req, res, next) {
    let id = req.params.id;
    let params = req.body;
    try {
      let customer = await Customer.update(id, params);
      res.json({ error_code: 0, data: customer })
    } catch (e) {
      res.status(500).json({ error_code: 1, message: e.message })
    }
  },

  delete: async function (req, res, next) {
    let id = req.params.id;
    try {
      await Customer.delete({ id });
      res.json({ error_code: 0, data: '删除成功' })
    } catch (e) {
      res.status(500).json({ error_code: 1, message: e.message })
    }
  }
}

module.exports = customerController;