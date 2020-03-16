<template>
	<div class="Calender-Wrapper">
		<DayHeader class="Calender-Day" v-for="day in weekdaysSorted" v-bind:day="day" v-bind:key="day" />
	</div>
</template>

<script>
	import DayHeader from "./DayHeader";
	export default {
		name: "CalenderHeader",
		components: {DayHeader},
		props: {
			weekdays: Array
		},
		computed: {
			weekdaysSorted() {
				let sorted = [];
				console.log(this);
				for (let i = 1; i < this.weekdays.length; i++) { sorted.push(this.weekdays[i]) }
				sorted.push(this.weekdays[0]);

				return sorted;
			}
		}
	}
</script>

<style scoped lang="scss">
	@import "src/scss/variables";

	.Calender-Wrapper {
		display: flex;
		flex-wrap: wrap;

		.Calender-Day {
			width: calc((99% / 7) - 1em);
			margin-bottom: 1em;
		}
	}
</style>