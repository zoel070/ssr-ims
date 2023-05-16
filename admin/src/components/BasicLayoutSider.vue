<template>
  <div class="sider-section">
    <div class="logo-section" @click="goHome">
      <img class="logo-img" src="@/assets/logo.png" />
      <span>IMS</span>
    </div>
    <SiderMenu />
  </div>
</template>

<script>
import SiderMenu from './BasicLayoutSiderMenu.vue'
export default {
  components: { SiderMenu },
  methods: {
    goHome() {
      if (this.$route.name == 'ArticleList') return;
      this.$router.replace({ name: 'ArticleList' })
    }
  }
};
</script>

<style  lang="less">
.sider-section {
  position: relative;
  width: 240px;
  background-color: #fff;
  box-shadow: 2px 0 8px 0 rgba(29, 35, 41, 0.05);
  transition: all 0.2s ease;
}

.logo-section {
  cursor: pointer;
  position: relative;
  height: 64px;
  background-color: #fff;
  box-shadow: 1px 1px 0 0 #e8e8e8;
  z-index: 1;
  padding-left: 14px;
  display: flex;
  align-items: center;
  font-family: Futura, Helvetica Neue For Number, -apple-system,
    BlinkMacSystemFont, Segoe UI, Roboto, PingFang SC, Hiragino Sans GB,
    Microsoft YaHei, Helvetica Neue, Helvetica, Arial, sans-serif;

  .logo-img {
    height: 40px;
    margin-right: 10px;
  }
}
</style>