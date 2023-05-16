# 适合 vue 初学者的项目

# IMS

信息管理系统

核心技术：

- express API
  -- knex
  -- mySQL
- vue cli admin 后台
  -- vue2
  -- element UI
- nuxtjs 前台
  -- vue2
  -- element UI

## Environment

- Node.js >= v10.16.3
- MySQL@5.7

## Feature

- MVCS Framework
- MySQL ORM

## admin Quick Start

默认地址为 localhost:8080

0. npm install
1. npm run dev

## nuxtjs Quick Start

默认地址为 localhost:4000

0. npm install
1. npm run dev

## express Quick Start

默认地址为 localhost:3000

0. open mysql create database ims-v1
1. npm install
2. Touch .env and filling as .env.example
3. npm run migrate:latest
4. npm run seed:run
5. npm run start
6. npm run migrate:rollback:all (if necessary)

## License

[MIT](LICENSE)

## Contact Author

- Email: zoel070@163.com
