<template>
	<div class="home">
		<img alt="Vue logo" src="assets/logo.png" />
		<HelloWorld msg="Welcome to Your Vue.js App" />

		<!-- Check that the SDK client is not currently loading before accessing is methods -->
		<div v-if="!this.$auth.loading">
			<!-- show login when not authenticated -->
			<button v-if="!this.$auth.isAuthenticated" @click="login">Log in</button>
			<!-- show logout when authenticated -->
			<button v-if="this.$auth.isAuthenticated" @click="logout">Log out</button>
		</div>
	</div>
</template>

<script>
	export default {
		name: "Home",
		components: {
		},
		methods: {
			// Log the user in
			login() {
				this.$auth.loginWithRedirect();
			},
			// Log the user out
			logout() {
				this.$auth.logout({
					returnTo: window.location.origin
				});
			}
		}
	}
</script>

<style scoped>

</style>