<template>
	<div class="FormContainer NoBorder">
		<form method="post" @submit.prevent="enterTrack">
			<div class="InputCombo">
				<label for="Category">Category: </label>
				<input type="text" id="Category" v-model="form.category">
				<button class="button" id="SubmitButtonSmall" v-if="small">Start</button>
			</div>
			<div v-if="!small">
				<div class="InputCombo">
					<label for="Description">Description: </label>
					<input type="text" id="Description" v-model="form.description">
				</div>
				<div class="InputCombo">
					<label for="Date">Date: </label>
					<input type="date" id="Date" v-model="form.date">
				</div>
				<div class="InputCombo">
					<label for="StartTime">StartTime: </label>
					<input type="time" id="StartTime" v-model="form.startTime">
				</div>
				<div class="InputCombo">
					<label for="EndTime">EndTime: </label>
					<input type="time" id="EndTime" v-model="form.endTime">
				</div>
				<div class="InputCombo">
					<label for="SubmitButton"></label>
					<button class="button" type="submit" id="SubmitButton">Submit</button>
				</div>
			</div>
		</form>
	</div>
</template>

<script>
	import {Form} from "../form";

	export default {
		name: 'FormTest',
		props: {
			small: Boolean
		},
		data ()
		{
			return {
				form: new Form(),
				errors: {}
			}
		},
		computed: {
			currentTrack ()
			{
				return this.$store.state.currentlyEnteringTrack;
			}
		},
		methods: {
			enterTrack ()
			{
				if (this.form.category === "") {
					this.errors["category"] = "Required";
					return;
				}

				// TODO: do some input validation
				if (this.small)
				{
					this.$emit('startTracking', this.form.category);
					this.form = new Form(this.currentTrack);
					return;
				}

				let originalDateString = this.form.date;
				this.form.date = new Date(originalDateString);
				this.form.startTime = new Date(originalDateString + " " + this.form.startTime);
				this.form.endTime = new Date(originalDateString + " " + this.form.endTime);

				let data = this.form;
				data.originalData = null;

				this.$emit('addTrack', data);

				//this.$store.commit('addTrack', this.form);
				//this.$store.dispatch("addTrack", this.$parent.$parent.firebase.tracks, this.currentTrack);
				this.form = new Form(this.currentTrack);
			}
		},
		mounted ()
		{
			this.form = new Form(this.currentTrack);
			// console.log(new Date().toLocaleDateString().slice(0, 10));
			// document.getElementById('Date').valueAsDate = new Date().toLocaleDateString().slice(0, 10);
		}
	}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
	@import "./src/scss/variables";

	.FormContainer {
		position: absolute;
		top: $headerHeight;
		right: 0;

		background-color: rgba($quinaryAccentColor, 0.1);
		/* border: solid 1px $secondaryAccentColor; */

		backdrop-filter: blur(2.5px);

		padding: 2em;
	}
</style>
