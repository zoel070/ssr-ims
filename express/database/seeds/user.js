exports.seed = function (knex) {
  return knex('user').insert([
    {
      phone: '15521045008',
      password: '123',
      sms: '123',
    },
    {
      phone: '15521045000',
      password: '456',
      sms: '456',
    },
  ])
};

