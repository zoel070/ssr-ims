import Vue from 'vue'
import Router from 'vue-router'
import routes from './routes.js';
import NProgress from 'nprogress' //加载条
import 'nprogress/nprogress.css' //加载条样式

Vue.use(Router)

const appRouter = new Router({
  mode: 'history',
  routes: routes
})

appRouter.beforeEach((to, from, next) => {
  NProgress.start();
  let hasToken = !!localStorage.getItem('token');
  console.log("🚀 ~ file: index.js:17 ~ appRouter.beforeEach ~ hasToken:", hasToken)
  if (to.name === 'Login' && hasToken) {
    next({ name: 'Article' })
  }
  if (to.name !== 'Login' && !hasToken) {
    next({ name: 'Login' })
  }
  next();
})

appRouter.afterEach((to, from) => {
  NProgress.done();
})

export default appRouter;