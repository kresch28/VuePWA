<template>
	<div class="Day">
		<div class="DayNumber" v-bind:class="{empty: day.number === ''}">
			{{ day.number }}
		</div>
		<div class="DayDescription">
			<Track v-for="track in day.tracksOfThisDay" v-bind:track="track" v-bind:key="track" v-bind:short-form="true" />
		</div>
	</div>
</template>

<script>
	import Track from "../Track";
	export default {
		name: "Day",
		components: {Track},
		props: {
			day: Object
		}
	}
</script>

<style scoped lang="scss">
	@import "src/scss/variables";

	.Day {
		border: 1px solid $tertiaryAccentColor;
		margin: 0;
		padding: 0.5em;

		transition: 0.5s ease;

		.DayNumber {
			border-bottom: solid 1px $quaternaryAccentColor;

			&.empty {
				border: none;
			}
		}

		.DayDescription {
			height: 100px;
			overflow-y: auto;
			overflow-x: hidden;
		}

		&:hover {
			background-color: $quinaryAccentColor;
		}
	}
</style>