import { createRouter, createWebHashHistory } from "vue-router";

const routes = [
  {
    path: "/",
    redirect: "/home",
  },
  {
    path: "/home",
    name: "home",
    meta: {
      title: "首页",
    },
    component: () =>
      import(/* webpackChunkName: "home" */ "../views/HomePage.vue"),
  },
  {
    path: "/classiccases",
    name: "case",
    meta: {
      title: "经典案例",
    },
    component: () =>
      import(/* webpackChunkName: "case" */ "../views/ClassicCases.vue"),
  },
  {
    path: "/enterprisedevelopment",
    name: "enterprise",
    meta: {
      title: "企业发展",
    },
    component: () =>
      import(/* webpackChunkName: "enterprise" */ "../views/EnterpriseDevelopment.vue"),
  },
  {
    path: "/about",
    name: "about",
    meta: {
      title: "关于我们",
    },
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
  {
    path: "/cooperation",
    name: "cooperation",
    meta: {
      title: "商务合作",
    },
    component: () =>
      import(/* webpackChunkName: "cooperation" */ "../views/Cooperation.vue"),
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

// router.beforeEach((to, from, next) => {
//   document.title = to.meta.title || "Admin";
//   next();
//   // do something
// });
// router.afterEach((to, from) => {
//   // do something
// });

export default router;
