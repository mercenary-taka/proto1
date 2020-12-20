import Vue from "vue";
import VueRouter from "vue-router";
//import Home from "../views/Home.vue";
import Kaz0101 from "../components/frame/kaz/Kaz0101.vue";
import Kaz0102 from "../components/frame/kaz/Kaz0102.vue";

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
    components: {
      KAZ0101: Kaz0101,
      KAZ0102: Kaz0102
    }

  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
