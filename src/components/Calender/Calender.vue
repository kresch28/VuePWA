<template>
	<div class="Calender-Wrapper">
		<CalenderHeader class="Calender-Header" v-bind:weekdays="weekdays" />
		<Day class="Calender-Day" v-for="day in month" v-bind:day="day" v-bind:key="day.number" />
	</div>
</template>

<script>
	import Day from "./Day";
	import CalenderHeader from "./CalenderHeader";
	export default {
		name: "Calender",
		components: {CalenderHeader, Day},
		props: {
			month: Array,
			weekdays: Array
		}
	}
</script>

<style scoped lang="scss">
	@import "src/scss/variables";

	.Calender-Wrapper {
		display: flex;
		flex-wrap: wrap;

		width: 80%;
		height: 80%;
		margin: auto;

		border: solid 1px $secondaryAccentColor;

		padding: 0.5em;

		.Calender-Header {
			border: none;
			padding: 0;
			width: 100%;
		}

		.Calender-Day {
			width: calc((99% / 7) - 1em);
		}
	}
</style>