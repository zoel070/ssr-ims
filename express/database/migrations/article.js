exports.up = function (knex) {
  return knex.schema.createTable('article', function (table) {
    table.increments('id');
    table.integer('user_id', 11).comment('用户 id');
    table.string('title', 255).comment('标题');
    table.integer('kind_id', 11).comment('分类');
    table.text('content').comment('文章内容');
    table.timestamp('created_time').defaultTo(knex.fn.now()).comment('创建时间');
    table.timestamp('updated_time').nullable().comment('修改时间');
  })
};


exports.down = function (knex) {
  return knex.schema
    .dropTable("article");
};

exports.config = { transaction: false };
