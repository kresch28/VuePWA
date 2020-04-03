<template>
	<div class="Calender-Wrapper">
		<CalenderHeader class="Calender-Header" v-bind:weekdays="getWeekdaysInCurrentLanguage()" />
		<Day class="Calender-Day" v-for="day in month" v-bind:day="day" v-bind:key="day.logicalDayCounter" v-bind:tracks="tracksOfDay(day)" />
	</div>
</template>

<script>
	import Day from "./Day";
	import CalenderHeader from "./CalenderHeader";
	export default {
		name: "Calender",
		components: {CalenderHeader, Day},
		props: {
			tracks: Array
		},
		data: () => {
			return {
				month: [],
				weekdays: {
					"eng": ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
					"ger": ["Sonntag", "Montag", "Dienstag", "Mittwoch", "Donnerstag", "Freitag", "Samstag"]
				}
			}
		},
		methods: {
			getWeekdaysInCurrentLanguage() {
				return this.weekdays[this.$parent.currentLanguage];
			},

			/**
			 * This method pushes an empty day into the data.month array
			 * That is used, so the days are indented correctly when visualizing the calender without having some kind of css tricks
			 * @returns {number}
			 */
			pushEmptyDay(counter) {
				return this.month.push({
					number: "",
					dayOfWeek: "",
					weekdayString: "",
					tracksOfThisDay: [],
					logicalDayCounter: counter
				})
			},

			/**
			 * This method collects data about the current month (on what day it starts and how many days it has) and fills the data.month array with the actual days of the current month
			 */
			fillMonth() {
				let date = new Date();
				let currentMonth = date.getMonth() + 1;
				let currentYear = date.getFullYear();

				let nrOfDays = new Date(currentYear, currentMonth, 0).getDate();
				let currentWeekDay = new Date(currentYear, currentMonth - 1, 1).getDay();
				let weekdays = this.getWeekdaysInCurrentLanguage();

				let counter = 0;

				/**
				 * Insert empty day tiles up front (so the days will be indented correctly, starting with monday)
				 * Special case is sunday, since this is the first day of the american calender, but the last one in ours, so if the first day is a sunday, just add 6 days
				 */
				let daysToInsert = currentWeekDay === 0 ? 6 : currentWeekDay - 1;
				for (let i = 0; i < daysToInsert; i++) { this.pushEmptyDay(counter++); }

				/**
				 * Push as many day object to the month array, as there are day in the month
				 */
				for (let i = 1; i <= nrOfDays; i++) {
					this.month.push({ // each day object has its respective day number, what day of the week it is, a string of that and a list of time tracks
						number: i,
						dayOfWeek: currentWeekDay,
						weekdayString: weekdays[currentWeekDay],
						tracksOfThisDay: [],
						date: new Date(currentYear, currentMonth - 1, i),
						logicalDayCounter: counter++
					});

					if (++currentWeekDay > 6) { currentWeekDay = 0; }
				}

				/**
				 * Fill up the empty days at the end of the month
				 */
				while (this.month.length % 7 !== 0) { this.pushEmptyDay(counter++); }
			},
			tracksOfDay(day) {
				return this.tracks.filter(track => this.IsSameDate(track.date, day.date));
			},
			/**
			 * @return {boolean}
			 */
			IsSameDate(date1, date2) {
				return date1 && date2 && date1.getFullYear() === date2.getFullYear() && date1.getMonth() === date2.getMonth() && date1.getDate() === date2.getDate();
			}
		},
		computed: {
		},
		mounted () {
			this.fillMonth();
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