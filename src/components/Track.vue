<template>
	<div class="TrackWrapper">
		<h3>{{ track.category }}</h3>
		<div class="TrackBody">
			<span v-if="!shortForm">{{ DateToString(track.date) }}: </span>{{ TimeToString(track.startTime) }} - {{ TimeToString(track.endTime) }}
		</div>
	</div>
</template>

<script>
	export default {
		name: "Track",
		props: {
			track: Object,
			shortForm: Boolean(false)
		},
		methods: {
			/**
			 * @return {string}
			 */
			DateToString(date) {
				return date.toLocaleDateString();
			},
			/**
			 * @return {string}
			 */
			TimeToString(time) {
				return time.toLocaleTimeString();
			}
		}
	}
</script>

<style scoped lang="scss">
	@import "src/scss/variables";

	.TrackWrapper {
		border: 1px solid $primaryAccentColor;
		border-left: 5px solid $secondaryAccentColor;

		margin: 0.25em;
		padding: 0.5em;
	}
</style>