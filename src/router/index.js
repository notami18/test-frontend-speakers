import Vue from "vue";
import VueRouter from "vue-router";
import store from "../store";

import HomeView from "../views/HomeView.vue";
import LoginView from "../views/LoginView.vue";
import RegisterView from "../views/RegisterView.vue";
import DetailUserView from "../views/DetailView.vue";

Vue.use(VueRouter);

const routes = [{
        path: "/",
        name: "home",
        component: HomeView,
        meta: {
            authentication: true,
        },
    },
    {
        path: "/login",
        name: "login",
        component: LoginView,
        meta: {
            authentication: false,
            guest: true,
        },
    },
    {
        path: "/register",
        name: "register",
        component: RegisterView,
        meta: {
            authentication: false,
            guest: true,
        },
    },
    {
        path: "/users/:id/todos",
        name: "detail-user",
        component: DetailUserView,
        meta: {
            authentication: true,
        },
    },
];

const router = new VueRouter({
    mode: "history",
    base: process.env.BASE_URL,
    routes, // short for routes: routes
    linkActiveClass: "active",
    scrollBehavior: (to, from, savedPosition) => {
        if (savedPosition) {
            return savedPosition;
        }
        if (to.hash) {
            return { selector: to.hash };
        }
        return { x: 0, y: 0 };
    },
});

const routeAccess = async(to, from, accountState, next) => {
    if (
        (!accountState.authenticated && to.path === "/login") ||
        to.path === "/register"
    ) {
        next();
    } else {
        if (from.path === "/login" || from.path === "/register") {
            next({
                path: "/login",
            });
        } else {
            next({
                path: "/",
            });
        }
    }
};

router.beforeEach((to, from, next) => {
    const authenticated = localStorage.userName && localStorage.email;
    const accountState = store.state.authentication;

    if (
        to.path === "/login" ||
        (to.path === "/register" && to.meta.guest && !accountState.authenticated)
    ) {
        if (authenticated) {
            next({
                path: "/",
            });
        } else {
            routeAccess(to, from, accountState, next);
        }
    } else if (
        (!accountState.authenticated || !accountState.user) &&
        !to.meta.guest
    ) {
        if (authenticated) {
            next();
            return;
        } else {
            next({
                path: "/login",
            });
        }
    } else if (to.meta.authentication && !accountState.authenticated) {
        next({
            path: "/login",
        });
    } else if (to.meta.guest && accountState.authenticated) {
        next({
            path: "/",
        });
    } else if (to.meta.authentication && accountState.authenticated) {
        if (authenticated) {
            routeAccess(to, from, accountState, next);
        } else {
            next({
                path: "/login",
            });
        }
    } else {
        next({
            path: "/",
        });
    }
});

export default router;