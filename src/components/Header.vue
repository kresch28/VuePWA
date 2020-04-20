<template>
    <header class="Site-header">
        <div class="Header Header--small">
            <h1>{{ pageTitle }}</h1>
            <Navigation v-if="false" />
            <div class="Options">
                <p id="ButtonAddTrack" class="button buttonAdd" @click="showForm(false)"><font-awesome-icon icon="plus" /> Add Track</p>
                <p id="ButtonStartTracking" class="button buttonAdd" @click="showForm(true)" v-if="!$parent.$data.recording"><font-awesome-icon icon="plus" /> Start tracking</p>
                <p id="ButtonStopTracking" class="button buttonStop" @click="$emit('stopTracking')" v-else><font-awesome-icon icon="minus" /> Stop tracking</p>

                <FormTest v-bind:small="onlyEnteringTitle" v-if="enteringData" v-on:startTracking="startTracking" v-on:addTrack="addTrack" />
            </div>
        </div>
    </header>
</template>

<script>
    import FormTest from "./FormTest";
    import Navigation from "./Navigation";
    export default {
        name: 'Header',
        components: {Navigation, FormTest},
        props: {
            pageTitle: String,
            enteringData: Boolean,
            onlyEnteringTitle: Boolean
        },
        methods: {
            showForm(showSmallForm = false) {
                if (!(this.onlyEnteringTitle !== showSmallForm && this.enteringData)) { this.enteringData = !this.enteringData; }
                this.onlyEnteringTitle = showSmallForm;
            },
            hideForm() {
                this.enteringData = false;
            },
            startTracking(category) {
                this.$emit('startTracking', category); // This seems a little dirty to me, but I don't know how to pass the event on to the next parent otherwise
                this.enteringData = false;
            },
            addTrack(data) {
                this.$emit('addTrack', data); // same as start tracking
            }
        },
        mounted () {
            this.enteringData = false;
            this.onlyEnteringTitle = false;
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
    @import "src/scss/variables";

    .Site-header {
        z-index: 100;

        position: fixed;
        width: 100%;
        left: 0;
        top: 0;
    }

    .Header {
        height: $headerHeight !important;
    }

    .Header, .Options {
        background-color: $primaryAccentColor;
        color: $primaryTextColor;
        text-align: center;

        display: flex;
        flex-direction: row;
        justify-content: space-between;

        padding: 0.5em;
    }

    .Header-credits, .Header-version {
        font-size: 0.8em;
    }

    h1 {
        margin: auto 0.5em;
        display: flex;
        flex-direction: row;
    }
</style>