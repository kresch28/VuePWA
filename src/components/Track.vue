<template>
	<form method="post" @submit.prevent="editTrack">
		<div class="TrackWrapper">
			<div class="ContentWrapper">
				<h3 v-if="!this.$data.editing" @click="toggleEditMode">{{ track.category }}</h3>
				<input name="inputEditCategory" class="BigInput" type="text" v-else v-model="track.category"/>


				<div v-if="!this.$data.editing" class="TrackBody">
					<div v-if="!shortForm" @click="toggleEditMode">{{ track.description }}</div>
					<span v-if="!shortForm">{{ DateToString(track.date) }}: </span>{{ TimeToString(track.startTime) }} - {{ TimeToString(track.endTime) }}
				</div>
				<div v-else class="TrackBody">
					<div>
						<input name="inputEditDescription" v-if="!shortForm" type="text" v-model="track.description"/>
					</div>
					<span v-if="!shortForm">{{ DateToString(track.date) }}: </span>{{ TimeToString(track.startTime) }} - {{ TimeToString(track.endTime) }}
				</div>
			</div>
			<div class="RemoveButtonWrapper">
				<button class="button ButtonRemove NoBorder" @click.prevent="$emit('removeTrack', track)">
					<font-awesome-icon icon="times"/>
				</button>
				<button type="submit" v-if="this.$data.editing" class="button ButtonEdit NoBorder">
					<font-awesome-icon icon="save"/>
				</button>
			</div>
		</div>
	</form>
</template>

<script>
	import {Form} from "../form";

	export default {
		name: "Track",
		props: {
			track: Object,
			shortForm: Boolean(false)
		},
		data ()
		{
			return {
				editing: false,
				form: Form
			}
		},
		methods: {
			/**
			 * @return {string}
			 */
			DateToString (date)
			{
				if (!(date instanceof Date))
				{ date = new Date(date); }
				return date.toLocaleDateString();
			},
			/**
			 * @return {string}
			 */
			TimeToString (time)
			{
				if (!(time instanceof Date))
				{ time = new Date(time); }
				return time.toLocaleTimeString();
			},
			toggleEditMode ()
			{
				if (!this.small) {
					this.editing = !this.editing;
				}
			},
			editTrack ()
			{
				this.$emit('editTrack', this.track);
				this.editing = false;
			}
			// TODO: make a function to scroll to the according track in the track overview when clicking this track in the calendar(with the small prop)
		},
		mounted () {
			this.form = new Form(this.track);
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

	input {
		text-align: center;
		border-left: 1px solid $inverseTextColor !important;
		border-top: 1px solid $inverseTextColor !important;
		border-right: 1px solid $inverseTextColor !important;
	}

	.BigInput {
		font-size: 1.17em;
		margin: 1em 0;
	}
</style>