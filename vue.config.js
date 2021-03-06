module.exports = {
    // … other Vue CLI plugin options …
    pwa: {
        name: 'Time Tracker',
        themeColor: '#e6fdcd',
        msTileColor: '#e6fdcd',
        iconPaths: {
            favicon32: 'img/icons/favicon-32x32.png',
            favicon16: 'img/icons/favicon-16x16.png',
            appleTouchIcon: 'img/icons/apple-touch-icon-180x180.png',
            maskIcon: 'img/icons/safari-pinned-tab.svg',
            msTileImage: 'img/icons/msapplication-icon-144x144.png',
        },
        workboxOptions: {
            cacheId: 'timetracker',
            importWorkboxFrom: 'local',
            navigateFallback: 'shell.html',
            navigateFallbackWhitelist: [/^((?!\/404).)*$/],
            // … other Workbox options …
        },
    },
};