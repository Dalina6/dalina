import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import Services from "../views/Services.vue";
import Service from "../views/Service.vue";
import Projects from "../views/Projects.vue";
import Project from "../views/Project.vue";
import ContactUs from "../views/ContactUs.vue";
import Candidates from "../views/Candidates.vue";
import AboutUs from "../views/AboutUs.vue";
import PageNotFound from "../views/PageNotFound.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "AboutUs",
    component: AboutUs,
  },
  {
    path: "/projects",
    name: "Projects",
    component: Projects,
  },
  {
    path: "/projects/:id",
    name: "Project",
    props: true,
    component: Project,
  },
  {
    path: "/services",
    name: "Services",
    component: Services,
  },
  {
    path: "/services/:id",
    name: "Service",
    props: true,
    component: Service,
  },
  {
    path: "/contact-us",
    name: "ContactUs",
    component: ContactUs,
  },
  {
    path: "/candidates",
    name: "Candidates",
    component: Candidates,
  },
  {
    path: "/:PageNotFound(.*)*",
    name: "PageNotFound",
    component: PageNotFound,
  },
  // good example:
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
