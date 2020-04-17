import VueRouter from "vue-router";
import Profile from "../Profile";
import {authGuard} from "../auth/authGuard";
import App from "../App";
import Home from "../Home";

const router = new VueRouter({
	mode: 'history',
	base: process.env.BASE_URL,
	routes: [
		{
			path: "/",
			name: "home",
			component: App,
			beforeEnter: authGuard
		},
		{
			path: "/login",
			name: "login",
			component: Home
		},
		{
			path: "/logout",
			name: "logout",
			component: Home
		},
		{
			path: "/profile",
			name: "profile",
			component: Profile,
			beforeEnter: authGuard
		}
	]
});

export default router;