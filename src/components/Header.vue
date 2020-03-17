<template>
    <header class="Site-header">
        <div class="Header Header--small">
            <h1>{{ pageTitle }}</h1>
            <div class="Options">
                <p class="button buttonAdd"><font-awesome-icon icon="plus" /> Add Track</p>
                <p class="button buttonAdd" @click="startTracking" v-if="!tracking"><font-awesome-icon icon="plus" /> Start tracking</p>
                <p class="button buttonStop" @click="stopTracking" v-else><font-awesome-icon icon="minus" /> Stop tracking</p>
            </div>
        </div>
    </header>
</template>

<script>
    export default {
        name: 'Header',
        props: {
            pageTitle: String,
            tracking: Boolean(false)
        },
        methods: {
            startTracking() {
                this.tracking = true;

                this.$parent.$parent.$data.currentlyRecordingTrack = { "date": new Date(), "startTime": new Date().getTime(), "endTime": null, "category": "", "description": "" };
            },
            stopTracking() {
                this.tracking = false;
                this.$parent.$parent.$data.currentlyRecordingTrack.endTime = new Date().getTime();
                this.$parent.$parent.$data.tracks.push(this.$parent.$parent.$data.currentlyRecordingTrack);
                this.$parent.$parent.$data.currentlyRecordingTrack = null;
            }
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

    .button {
        border: solid 1px $tertiaryAccentColor;
        padding: 0.5em;
        margin: 0.5em;
        cursor: pointer;
        background-color: transparent;

        transition: 0.25s ease;

        &:hover {
            background-color: $tertiaryAccentColor;
        }
    }

    h1 {
        margin: auto 0.5em;
        display: flex;
        flex-direction: row;
    }
</style>