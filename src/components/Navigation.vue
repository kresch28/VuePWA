<template>
	<div id="nav">
		<RouterLink v-for="link in links" v-bind:key="link.displayedTitle" v-bind:to="link.route">{{ link.displayedTitle }}</RouterLink>
		<router-link to="/">Home</router-link>
		|
		<router-link to="/about">About</router-link>
		|

		<!-- NEW - add a route to the profile page -->
		<router-link v-if="this.$auth.isAuthenticated" to="/profile">Profile</router-link>
	</div>
</template>

<script>
	// eslint-disable-next-line no-unused-vars
	import router from "../router";

	export default {
		name: "Navigation",
		data ()
		{
			return {
				links: [
					{ displayedTitle: "Home", route: "/"},
					{ displayedTitle: "About", route: "/about"},
					{ displayedTitle: "Profile", route: "/profile"},
				]
			}
		},
		render: function (createElement)
		{
			return createElement('div', "Navigation", this.links.forEach(link => createElement('router-link', link.displayedTitle, { props: { to: link.route }})));
		}
	}
</script>

<style scoped>

</style>