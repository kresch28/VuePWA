<template>
	<div class="Day">
		{{ day.number }}
		<br>
		{{ day.weekdayString }}
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
	}
</style>