import Vue from "vue"
import VueRouter, { RouteConfig } from "vue-router"
import { links } from "./config"

Vue.use(VueRouter)

const routes: Array<RouteConfig> = []

// fill routes
links.forEach((link) => {
  routes.push({
    path: link.path,
    name: link.name,
    // route level code-splitting
    // this generates a separate chunk (component.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: link.component,
  })
})

export default new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
})
