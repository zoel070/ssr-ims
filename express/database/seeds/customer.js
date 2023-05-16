exports.seed = function (knex) {
  return knex('customer').insert([{
    user_id: 1,
    name: '林丹',
    address: '上海市普陀区金沙江路 0000 弄',
    password: '0000',
  }, {
    user_id: 1,
    name: '刘德华',
    address: '上海市普陀区金沙江路 1111 弄',
    password: '1111',
  }, {
    user_id: 1,
    name: '王小虎',
    address: '上海市普陀区金沙江路 2222 弄',
    password: '2222',
  }, {
    user_id: 1,
    name: '周杰伦',
    address: '上海市普陀区金沙江路 3333 弄',
    password: '3333',
  }])
};
