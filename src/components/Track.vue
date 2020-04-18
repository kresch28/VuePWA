<template>
	<div class="TrackWrapper">
		<div class="ContentWrapper">
			<h3 v-if="!this.$data.editing">{{ track.category }}</h3>
			<input type="text" v-else v-bind:value="track.category" />




			<div v-if="!this.$data.editing" class="TrackBody">
				<div v-if="!shortForm" @click="toggleEditMode">{{ track.description }}</div>
				<span v-if="!shortForm">{{ DateToString(track.date) }}: </span>{{ TimeToString(track.startTime) }} - {{ TimeToString(track.endTime) }}
			</div>
			<div v-else class="TrackBody">
				<input v-if="!shortForm" type="text" v-bind:value="track.description" />
				<span v-if="!shortForm">{{ DateToString(track.date) }}: </span>{{ TimeToString(track.startTime) }} - {{ TimeToString(track.endTime) }}
			</div>
		</div>
		<div class="RemoveButtonWrapper">
			<button class="button ButtonRemove NoBorder" @click="$emit('removeTrack', track)"><font-awesome-icon icon="times" /></button>
			<button v-if="this.$data.editing" class="button ButtonEdit NoBorder" @click="editTrack(track)"><font-awesome-icon icon="save" /></button>
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
		data() {
			return {
				editing: false
			}
		},
		methods: {
			/**
			 * @return {string}
			 */
			DateToString(date) {
				if (!(date instanceof Date)) { date = new Date(date); }
				return date.toLocaleDateString();
			},
			/**
			 * @return {string}
			 */
			TimeToString(time) {
				if (!(time instanceof Date)) { time = new Date(time); }
				return time.toLocaleTimeString();
			},
			toggleEditMode() {
				this.editing = !this.editing;
			},
			editTrack(track) {
				this.$emit('editTrack', track);
				this.editing = false;
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

		display: flex;
		flex-direction: row;

		.ContentWrapper {
			flex-grow: 5;
		}

		.RemoveButtonWrapper {
			flex-shrink: 5;
		}
	}
</style>