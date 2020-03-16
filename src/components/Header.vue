<template>
    <header class="Site-header">
        <div class="Header Header--small">
            <h1>{{ pageTitle }}</h1>
            <div class="Options">
                <p class="add"><font-awesome-icon icon="plus" /> Add Track</p>
            </div>
        </div>
    </header>
</template>

<script>
    export default {
        name: 'Header',
        props: {
            pageTitle: String
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
    @import "src/scss/variables";

    .Site-header {
        z-index: 100;

        position: absolute;
        width: 100%;
        left: 0;
        top: 0;
    }

    .Header {
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

    .add {
        border: solid 1px $tertiaryAccentColor;
        padding: 0.5em;
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