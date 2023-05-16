<template>
  <div>
    <el-menu default-active="0" mode="horizontal" background-color="#545c64" text-color="#fff" active-text-color="#ffd04b"
      class="navi-container">
      <el-menu-item index="0" style="padding:0;">
        <nuxt-link :to="{ name: 'index-id', params: { id: 0 } }"
          style="display: block; z-index: 999; width:80px;text-align: center;">
          全部
        </nuxt-link>
      </el-menu-item>
      <el-menu-item v-for="item in kinds" :key="item.id" :index="item.id.toString()" style="padding:0;">
        <nuxt-link :to="{ name: 'index-id', params: { id: item.id } }"
          style="display: block; z-index: 999; width:80px;text-align: center;">
          {{ item.kind }}
        </nuxt-link>
      </el-menu-item>
    </el-menu>
    <nuxt />
  </div>
</template>

<script>
import axios from 'axios';

export default {
  async asyncData() {
    try {
      const response = await axios.get('http://localhost:3000/api/kind');
      const kinds = response.data.data.kinds;
      return {
        kinds,
      };
    } catch (e) {
      console.log(e)
    }
  },
}
</script>

<style>
body {
  font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
  font-size: 15px;
  background-color: #f2f3f5;
  margin: 0;
  padding-top: 80px;
  min-width: 1000px;
}

a {
  color: #666;
  text-decoration: none;
}

a:active {
  color: #666;
}

header {
  background-color: #35b558;
  position: fixed;
  z-index: 999;
  top: 0;
  left: 0;
  right: 0;
}


.header .container {
  width: 1000px;
  box-sizing: border-box;
  margin: 0 auto;
  padding: 20px 0;
}

.header .logo-img {
  height: 40px;
  margin-right: 150px;
  float: left;
}

.header a {
  color: #fff;
  line-height: 40px;
  transition: color .15s ease;
  display: inline-block;
  vertical-align: middle;
  font-weight: 300;
  letter-spacing: .075em;
  margin-right: 1.8em;
}

.header a.active {
  color: #fff;
  font-weight: 400;
  transform: scale(1.2);
}

.news-list {
  margin: 30px auto;
  width: 1000px;
  transition: all .5s cubic-bezier(.55, 0, .1, 1);
  background-color: #fff;
  border-radius: 2px;
}

.news-list ul {
  list-style-type: none;
  padding: 0;
  margin: 0;
  padding: 20px;
}

.news-item {
  background-color: #fff;
  padding: 10px 20px;
  position: relative;
  line-height: 20px;
}

.news-item:hover {
  background-color: #666666;
  cursor: pointer;
}

.news-item>a {
  display: block;
  color: #666;
}

.news-item .title {
  margin: 10px 0;
  line-height: 24px;
  font-size: 20px;
  font-weight: 500;
  color: #333;
}

.news-item .meta {
  font-size: 14px;
  color: #999;
  line-height: 20px;
}

.article-container {
  margin: 30px auto;
  max-width: 1000px;
  transition: all .5s cubic-bezier(.55, 0, .1, 1);
  background-color: #fff;
  border-radius: 2px;
  min-height: 600px;
  padding: 40px;
}

.article-title {
  color: #333;
  font-size: 18px;
  font-weight: 600;
  text-align: center;
  line-height: 2;
}

.article-meta {
  color: #999;
  font-size: 14px;
  text-align: center;
}

.article-content {
  margin-top: 20px;
  margin-left: 20px;
}

.navi-container {
  display: flex;
  justify-content: center;
}
</style>