<template>
  <div class="news-list">
    <ul v-if="articles.length">
      <nuxt-link v-for="item in articles" :key="item.id" :to="{ name: 'index-article-id', params: { id: item.id } }">
        <li class="news-item">
          <p class="title">{{ item.title }}</p>
          <p class="meta">{{ item.updated_time }}</p>
        </li>
      </nuxt-link>
    </ul>
    <ul v-else>
      <li class="news-item">
        <p class="meta">没有数据 ～</p>
      </li>
    </ul>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  async asyncData({ params }) {
    try {
      params = params.id === 0 ? {} : { kind_id: params.id };
      const res = await axios.get('http://localhost:3000/api/article', { params });
      return {
        articles: res.data.data.articles
      };
    } catch (e) {
      throw e;
    }
  }
}
</script>
