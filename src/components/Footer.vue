<template>
	<footer class="Site-footer">
		<div class="Footer Footer--small">
			<h3>{{ projectTitle }}</h3>
			<div class="Footer-credits">
				<div class="Team-Members">
					<h3>Team members: </h3>
					<p class="Team-Member" v-for="teamMember in teamMembers" :key="teamMember">{{ teamMember }}</p>
				</div>
			</div>

			<p class="Footer-version">Version: {{ version }}</p>
		</div>
	</footer>
</template>

<script>
	export default {
		name: 'Footer',
		props: {
			projectTitle: String,
			version: String,
			teamMembers: Array
		}
	}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
	@import "src/scss/variables";

	.Site-footer {
		z-index: 100;

		width: 100%;
		left: 0;
		bottom: 0;
		background-color: $primaryAccentColor;
		color: $primaryTextColor;
	}

	.Footer {
		text-align: center;

		display: flex;
		flex-direction: row;
		justify-content: space-between;

		padding: 0.5em;
	}

	.Footer-credits, .Footer-version {
		font-size: 0.8em;
	}

	h3, .Team-Members {
		margin: auto 0.5em;

		display: flex;
		flex-direction: row;
	}

	.Team-Member {
		margin-right: 0.25em;
		margin-left: 0.25em;
	}

	.Team-Member:after {
		content: ',';
	}

	.Team-Members .Team-Member:last-of-type:after {
		content: '';
	}
</style>
