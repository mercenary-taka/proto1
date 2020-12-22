import Vue from "vue";
import VueRouter from "vue-router";
//import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  /*{
    path: "/",
    name: "Home",
    component: Home
  },*/
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue")
  },
  {
    path: "/",
    name: "window",
    props: true,
    components: {
      KAZ0101: () => import("../components/frame/kaz/Kaz0101.vue"),
      KAZ0102: () => import("../components/frame/kaz/Kaz0102.vue"),
      ZZZ0103: () => import("../components/frame/zzz/Zzz0103.vue"),
    }

  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
