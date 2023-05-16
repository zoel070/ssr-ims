const basicModel = require('./index.js');
const config = require('./../knexfile.js');
const knex = require('knex')(config);

class model extends basicModel {
  constructor(props = "article") {
    super(props);
  }

  whereArticle(params) {
    return knex(this.table)
      .leftJoin('kind', 'article.kind_id', '=', 'kind.id')//是把第二张表中符合条件的完整子表连接进来的
      .select('article.*', 'kind.kind')//选择两张表中想要的列即可
      .where(params).orderBy('article.id', 'asc')
  }

}

module.exports = new model();
