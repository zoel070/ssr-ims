exports.seed = function (knex) {
  return knex('kind').insert([{
    user_id: 1,
    kind: '技术动态',
  },
  {
    user_id: 1,
    kind: '极客新闻',
  },
  {
    user_id: 1,
    kind: '通知公告',
  },
  {
    user_id: 1,
    kind: '技术热点',
  },
  {
    user_id: 1,
    kind: '新课列表',
  },])
};
