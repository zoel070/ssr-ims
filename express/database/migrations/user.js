exports.up = function (knex) {
  return knex.schema.createTable('user', function (table) {
    table.increments('id');
    table.string('phone', 255).notNullable();
    table.string('password', 255).notNullable();
    table.string('sms', 255).notNullable();
    table.timestamp('created_time').defaultTo(knex.fn.now()).comment('创建时间');
  })
};


exports.down = function (knex) {
  return knex.schema
    .dropTable("user");
};

exports.config = { transaction: false };

