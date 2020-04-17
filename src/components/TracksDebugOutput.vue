<template>
	<div class="TracksWrapper">
		<h2>Tracks</h2>
		<Track v-for="track in tracks" v-bind:track="track" v-bind:key="track.id" />
		<ul>
			<li v-for="track in tracks" v-bind:key="track.id">{{ track }}</li>
		</ul>
	</div>
</template>

<script>
	import Track from "./Track";
	export default {
		name: 'TracksDebugOutput',
		components: {Track},
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

		/*
		border-left: 1px solid $tertiaryAccentColor;
		border-right: 1px solid $tertiaryAccentColor; */

        ul {
            list-style-type: none;
        }
	}
</style>