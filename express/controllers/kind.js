const Kind = require('../models/kind.js');


const kindController = {
  index: async function (req, res, next) {
    let user_id = res.locals.user_id || 1;
    if (!user_id) {
      res.status(500).json({ error_code: 1, message: '缺少必要参数' })
      return
    }
    try {
      let kinds = await Kind.where({ user_id, });
      res.json({ error_code: 0, data: { kinds } })
    } catch (e) {
      res.status(500).json({ error_code: 1, message: e.message })
    }
  },

  insert: async function (req, res, next) {
    let kind = req.body.kind;
    let user_id = res.locals.user_id || 1;
    if (!kind || !user_id) {
      res.status(500).json({ error_code: 1, message: '缺少必要参数' })
      return
    }
    try {
      const kinds = await Kind.insert({ kind, user_id, });
      res.json({ error_code: 0, data: { kinds } })
    } catch (e) {
      res.status(500).json({ error_code: 1, message: e.message })
    }
  },

  update: async function (req, res, next) {
    let id = req.params.id;
    let params = req.body;
    try {
      let kind = await Kind.update(id, params);
      res.json({ error_code: 0, data: kind })
    } catch (e) {
      res.status(500).json({ error_code: 1, message: e.message })
    }
  },

  delete: async function (req, res, next) {
    let id = req.params.id;
    try {
      await Kind.delete({ id });
      res.json({ error_code: 0, data: '删除成功' })
    } catch (e) {
      res.status(500).json({ error_code: 1, message: e.message })
    }
  }
}

module.exports = kindController;