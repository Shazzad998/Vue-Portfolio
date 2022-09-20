import Home from "./views/Home.vue";
import Portfolio from "./views/Portfolio.vue";
import Contact from "./views/Contact.vue";
import NotFound from "./views/NotFound.vue";
import ProjectDetail from "./views/ProjectDetail2.vue";

export const routes = [
  { path: "/", component: Home, meta: { title: "Home" }, name: "home" },
  {
    path: "/portfolio",
    meta: { title: "Portfolio" },
    component: Portfolio,
    name: "portfolio",
  },

  {
    path: "/project-detail/:id",
    meta: { title: "Project Detail" },
    component: ProjectDetail,
    name: "project.detail",
  },

  {
    path: "/contact",
    meta: { title: "Contact" },
    component: Contact,
    name: "contact",
  },
  { path: "/:path(.*)", component: NotFound },
];
