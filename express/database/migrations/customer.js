exports.up = function (knex) {
  return knex.schema.createTable('customer', function (table) {
    table.increments('id');
    table.integer('user_id', 11).comment('用户 id');
    table.string('name', 255).comment('姓名');
    table.string('address', 255).comment('地址');
    table.string('password', 255).comment('密码');
    table.timestamp('created_time').defaultTo(knex.fn.now()).comment('创建时间');
  })
};


exports.down = function (knex) {
  return knex.schema
    .dropTable("customer");
};

exports.config = { transaction: false };
