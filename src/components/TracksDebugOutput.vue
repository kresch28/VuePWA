<template>
	<div class="TracksWrapper">
		<h2>Tracks</h2>
		<ul>
			<li v-for="track in tracks" v-bind:key="track">{{ track }}</li>
		</ul>
	</div>
</template>

<script>
	export default {
		name: 'TracksDebugOutput',
		props: {
			tracks: Array
		}
	}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
	@import "src/scss/variables";

	.TracksWrapper {
		width: 80%;
        margin: 5em auto;

		border-left: 1px solid $tertiaryAccentColor;
		border-right: 1px solid $tertiaryAccentColor;

        ul {
            list-style-type: none;
        }
	}
</style>