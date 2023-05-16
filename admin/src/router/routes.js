// eslint-disable-next-line
import Login from '@/pages/Login'
import Customer from '@/pages/Customer'
import Kind from '@/pages/Kind'
import Article from '@/pages/Article'
import ArticleCreate from '@/pages/ArticleCreate'
import ArticleEdit from '@/pages/ArticleEdit'
import ArticleList from '@/pages/ArticleList'
import Error404 from '@/pages/Error404.vue'

import BasicLayout from "@/components/BasicLayout.vue";

export default [
  {
    path: '/',
    redirect: { name: 'Login' }
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/404',
    name: 'Error404',
    component: Error404
  },
  {
    path: '/admin',
    name: 'Root',
    component: BasicLayout,
    redirect: { name: "Article" },
    children: [{
      path: '/admin/customer',
      name: 'Customer',
      component: Customer,
      meta: {
        nav: {
          icon: "el-icon-s-custom",
          title: "客户管理"
        },
        breadcrumb: {
          title: "客户管理"
        }
      },
    },
    {
      path: '/admin/classify',
      name: 'Kind',
      component: Kind,
      meta: {
        nav: {
          icon: "el-icon-files",
          title: "分类管理"
        },
        breadcrumb: {
          title: "分类管理"
        }
      },
    },
    {
      path: '/admin/article',
      name: 'Article',
      component: Article,
      redirect: { name: "ArticleList" },
      meta: {
        nav: {
          icon: "el-icon-tickets",
          title: "文章管理"
        },
        breadcrumb: {
          title: "文章管理"
        }
      },
      children: [{
        path: '/admin/article/list',
        name: 'ArticleList',
        component: ArticleList,
        meta: {
          nav: {
            icon: "el-icon-document-copy",
            title: "文章列表"
          },
          breadcrumb: {
            title: "文章列表"
          }
        }
      },
      {
        path: '/admin/article/create',
        name: 'ArticleCreate',
        component: ArticleCreate,
        meta: {
          nav: {
            icon: "el-icon-document-add",
            title: "新建文章"
          },
          breadcrumb: {
            title: "新建文章"
          }
        }
      },
      {
        path: '/admin/article/edit/:id',
        name: 'ArticleEdit',
        component: ArticleEdit,
        meta: {
          breadcrumb: {
            title: "编辑文章"
          }
        }
      }]
    }]
  },
]