# 适合 vue 初学者的项目

# IMS

信息管理系统
![1684219330558](https://github.com/zoel070/ssr-ims/assets/121177078/c28d7d30-ece8-4542-9a40-45295b77829e)
![1684219339755](https://github.com/zoel070/ssr-ims/assets/121177078/47ad18ed-b975-4660-83d0-13426f5e3299)
![1684219358536](https://github.com/zoel070/ssr-ims/assets/121177078/08f9e464-848e-41d2-be06-13297d24222c)
![1684219375701](https://github.com/zoel070/ssr-ims/assets/121177078/f288c9d0-d212-43ab-93b1-c410f27f2127)
![1684219384000](https://github.com/zoel070/ssr-ims/assets/121177078/eb2998b6-bbb0-4782-b92a-b3520f687ba2)

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
