const Article = require('../models/article.js');
const formate = require('../utils/date.js');

const articleController = {
  index: async function (req, res, next) {
    try {
      let kind_id = req.query.kind_id;
      let user_id = res.locals.user_id || 1;
      if (!user_id) {
        return res.status(500).json({ error_code: 1, message: '缺少必要参数' });
      }
      let query = { 'article.user_id': user_id };
      if (kind_id) {
        query.kind_id = kind_id;
      }
      let articles = await Article.whereArticle(query);
      articles = articles.map(data => {
        data.updated_time = formate.formatTime(data.updated_time);
        return data;
      });
      return res.json({ error_code: 0, data: { articles } });
    } catch (e) {
      return res.status(500).json({ error_code: 1, message: e.message });
    }
  },

  show: async function (req, res, next) {
    let id = req.params.id;
    let user_id = res.locals.user_id || 1;
    if (!user_id) {
      res.status(500).json({ error_code: 1, message: '缺少必要参数' })
      return
    }
    try {
      let query = { 'article.user_id': user_id, 'article.id': id };
      let articles = await Article.whereArticle(query);
      articles = articles.map(data => {
        data.updated_time = formate.formatTime(data.updated_time);
        return data;
      });
      let article = articles[0]
      res.json({ error_code: 0, data: { article } })
    } catch (e) {
      res.status(500).json({ error_code: 1, message: e.message })
    }
  },

  insert: async function (req, res, next) {
    let title = req.body.title;
    let kind_id = req.body.kind_id;
    let content = req.body.content;
    let user_id = res.locals.user_id || 1;
    let created_time = new Date();
    let updated_time = new Date();
    if (!title || !user_id) {
      res.status(500).json({ error_code: 1, message: '缺少必要参数' })
      return
    }
    try {
      const articles = await Article.insert({ kind_id, title, content, user_id, created_time, updated_time });
      res.json({ error_code: 0, data: { articles } })
    } catch (e) {
      res.status(500).json({ error_code: 1, message: e.message })
    }
  },

  update: async function (req, res, next) {
    let id = req.params.id;
    let params = {
      title: req.body.title,
      kind_id: req.body.kind_id,
      content: req.body.content,
      updated_time: new Date(),
    }
    console.log(params, 123123)
    try {
      let article = await Article.update(id, params);
      res.json({ error_code: 0, data: { article } })
    } catch (e) {
      res.status(500).json({ error_code: 1, message: e.message })
    }
  },

  delete: async function (req, res, next) {
    let id = req.params.id;
    try {
      await Article.delete({ id });
      res.json({ error_code: 0, data: '删除成功' })
    } catch (e) {
      res.status(500).json({ error_code: 1, message: e.message })
    }
  }
}

module.exports = articleController;