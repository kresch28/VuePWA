import 'firebase/database'
import Vue from 'vue'
import Vuex from 'vuex'
import {firebaseAction, vuexfireMutations} from "vuexfire";

Vue.use(Vuex);

export const store = new Vuex.Store({
	state: {
		id: 0,
		tracks: [],
		currentlyEnteringTrack: { date: new Date(), startTime: null, endTime: new Date(), category: "", description: "" },
		emptyTrack: { date: new Date(), startTime: null, endTime: new Date(), category: "", description: "" },
	},
	/*
	mutations: {
		//addTrack(state, category, startTime, date = new Date(), endTime = new Date(), description = "") {
		addTrack(state, data) {
			state.tracks.push({ id: state.id++, date: data.date, startTime: data.startTime, endTime: data.endTime, category: data.category, description: data.description });
		},
		updateCurrentTrack(state, data) {
			state.currentlyEnteringTrack = data;
		},
		resetCurrentTrack(state) {
			state.currentlyEnteringTrack = state.emptyTrack;
		}
		
		// TODO: make the tracks editable
	},
	*/
	mutations: vuexfireMutations,
	actions: {
		bindTracks: firebaseAction(({ bindFirebaseRef }, reference) => {
			return bindFirebaseRef('tracks', reference);
		}),
		unbindTracks: firebaseAction(({ unbindFirebaseRef }) => {
			return unbindFirebaseRef('tracks');
		}),
		addTrack: firebaseAction((context, payload) => {
			return context.add(payload);
		}),
	},
	getters: {
		tracks: state => state.tracks,
		currentlyEnteringTrack: state => state.currentlyEnteringTrack
	},
});
