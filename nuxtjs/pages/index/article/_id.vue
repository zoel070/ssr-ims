<template>
  <div class="news-list">
    <div class="article-title">{{ article.title }}</div>
    <div class="article-meta">{{ article.updated_time }}</div>
    <div class="article-content" v-html="paper"></div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  async asyncData({ params }) {
    try {
      const res = await axios.get(`http://localhost:3000/api/article/${params.id}`);
      return {
        article: res.data.data.article
      };
    } catch (e) {
      throw e;
    }
  },
  computed: {
    paper() {
      return this.article.content
    }
  }
}
</script>

<style></style>