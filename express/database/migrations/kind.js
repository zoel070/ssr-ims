exports.up = function (knex) {
  return knex.schema.createTable('kind', function (table) {
    table.increments('id');
    table.integer('user_id', 11).comment('用户 id');
    table.string('kind', 255).comment('分类名称');
  })
};


exports.down = function (knex) {
  return knex.schema
    .dropTable("kind");
};

exports.config = { transaction: false };
