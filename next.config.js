const { nextI18NextRewrites } = require("next-i18next/rewrites");

const localeSubpaths = {};

module.exports = {
    rewrites: async () => nextI18NextRewrites(localeSubpaths),
    publicRuntimeConfig: {
        localeSubpaths,
    },
    webpack: (config, { isServer }) => {
        if (!isServer) {
            config.node = {
                fs: "empty",
                net: "empty",
                tls: "empty",
            };
        }
        return config;
    },
    env: {
        EMAILJS_USER_ID: process.env.EMAILJS_USER_ID,
    },
};
