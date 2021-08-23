import { createWebHistory, createRouter } from "vue-router";

import Home from "./components/Home.vue";
import Projects from "./components/Projects.vue";
import Experience from "./components/Experience.vue";
import Attachments from "./components/Attachments.vue";
import Landing from "./components/Landing.vue";

const routes = [
    {
        path: "/basic-information",
        name: "Home",
        component: Home
    },
    {
        path: "/projects",
        name: "Projects",
        component: Projects
    },
    {
        path: "/education-and-experience",
        name: "Experience",
        component: Experience
    },
    {
        path: "/attachments",
        name: "Attachments",
        component: Attachments
    },
    {
        path: "/",
        name: "Landing",
        component: Landing
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});
export default router;
