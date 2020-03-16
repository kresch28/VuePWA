<template>
	<div class="Day">
		{{ day }}
	</div>
</template>

<script>
	export default {
		name: "DayHeader",
		props: {
			day: String
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