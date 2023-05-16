<template>
  <div class="breadcrumb-section" v-if="breadcrumbValue.length || title || description">
    <el-breadcrumb class="breadcrumb-list" v-if="breadcrumbValue.length">
      <template v-for="item in breadcrumbValue">
        <el-breadcrumb-item v-if="item.to" :replace="true" :key="item.name" :to="item.to">
          {{ item.name }}</el-breadcrumb-item>
        <el-breadcrumb-item v-else :key="item.name">
          {{ item.name }}</el-breadcrumb-item>
      </template>
    </el-breadcrumb>
  </div>
</template>

<script>
export default {
  props: {
    breadcrumb: {
      type: Array,
      default: () => []
    }
  },
  computed: {
    breadcrumbValue() {
      const { breadcrumb } = this;
      if (breadcrumb.length) {
        return breadcrumb;
      }
      return this.$route.matched
        .filter(data => data.meta && data.meta.breadcrumb)
        .map(data => ({
          name: data.meta.breadcrumb.title,
          to: data.meta.breadcrumb.replace ? { name: data.name } : undefined
        }));
    }
  }
};
</script>

<style lang="less">
.breadcrumb-section {
  background-color: #fff;
  padding: 16px 32px;
  padding-bottom: 0;
  overflow: hidden;
  flex: none;

  .breadcrumb-list,
  .breadcrumb-title,
  .breadcrumb-description {
    margin-bottom: 16px;
  }
}
</style>