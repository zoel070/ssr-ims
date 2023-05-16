# 适合 vue 初学者的项目

# IMS

信息管理系统
![1684160025291](https://github.com/zoel070/ssr-ims/assets/121177078/0ca57f83-7dc6-4f32-8b7c-499126806a81)
![1684159903341](https://github.com/zoel070/ssr-ims/assets/121177078/1727ee1a-0c99-4a6c-a49c-ce24cfddb0f8)
![1684159907777](https://github.com/zoel070/ssr-ims/assets/121177078/a3851124-3d8c-4c16-a361-85ab619a413d)
![1684159848108](https://github.com/zoel070/ssr-ims/assets/121177078/b89a7335-0f8a-4293-9c1d-8f4b5313db1e)
![1684159858835](https://github.com/zoel070/ssr-ims/assets/121177078/14ed91a9-4b14-4f0f-b74a-c27e931a25b4)

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
