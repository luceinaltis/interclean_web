// require("dotenv").config();
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
  //   env: {
  //     SERVICE_ID: process.env.SERVICE_ID,
  //     TEMPLATE_ID: process.env.TEMPLATE_ID,
  //     USER_ID: process.env.USER_ID,
  //     ACCESS_TOKEN: process.env.ACCESS_TOKEN,
  //   },
};
