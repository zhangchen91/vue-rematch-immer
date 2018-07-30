import Vue from "vue";
import Router from "vue-router";
import todolist from "./pages/todolist";
import counter from "./provider/Counter";

Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      name: "todolist",
      component: todolist
    },
    {
      path: "/counter",
      name: "counter",
      component: counter
    }
  ]
});
