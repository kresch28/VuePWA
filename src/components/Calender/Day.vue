<template>
	<div class="Day">
		<div class="DayNumber">
			{{ day.number }}
		</div>
		<div class="DayDescription">
		</div>
	</div>
</template>

<script>
	export default {
		name: "Day",
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

		.DayDescription {
			min-height: 100px;
		}
	}
</style>