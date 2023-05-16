<template>
  <div class="header-section">
    <div class="header-hd">
      <Breadcrumb />
    </div>
    <div class="header-bd"></div>
    <div class="header-ft">
      <el-dropdown style="height: 100%;" @command="handleCommand">
        <div class="bar-info-container">
          <i class="el-icon-user-solid userInfo-avatar"></i>
          <span class="userInfo-name">{{ userInfo.name }}</span>
          <i class="el-icon-arrow-down el-icon--right"></i>
        </div>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item command="Logout" icon="el-icon-video-pause">退出</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
  </div>
</template>
  
<script>
import Breadcrumb from "./BasicBreadcrumb.vue";

export default {
  data() {
    return {
      userInfo: {}
    };
  },
  methods: {
    handleCommand(command) {
      const handleName = `handle${command}`;
      this[handleName]();
    },
    handleLogout() {
      localStorage.clear();
      this.$router.push({ name: 'Login' })
    }
  },
  components: {
    Breadcrumb
  }
};
</script>
  
<style lang="less" scoped>
.header-section {
  position: relative;
  padding: 0 16px;
  height: 64px;
  display: flex;
  z-index: 10;
  background-color: #fff;
  box-shadow: 0 2px 8px #f0f1f2;

  .header-bd {
    flex: 1;
  }
}

.header-hd,
.header-bd,
.header-ft {
  display: flex;
  align-items: center;
}

.bar-info-container {
  display: flex;
  align-items: center;
  height: 100%;
  padding: 0 10px;
  transition: all 0.2s ease;
  cursor: pointer;

  &:hover {
    background-color: #ecf5ff;
  }

  .userInfo-name {
    font-size: 14px;
    vertical-align: middle;
  }

  .userInfo-avatar {
    display: inline-block;
    width: 20px;
    height: 20px;
    line-height: 20px;
    text-align: center;
    background-color: #ccc;
    border-radius: 50%;
    outline: none;
    margin: 0 10px;
  }
}
</style>