module.exports = function override(config) {
  config.module.rules.push({
    type: "javascript/auto",
    test: /\.mjs$/,
    use: [],
  });
  return config;
};
// example 2.
// module.exports = {
//   webpackFinal: async (config, { configType }) => {
//     config.module.rules.push({
//       type: "javascript/auto",
//       test: /\.mjs$/,
//       use: [],
//     });
//     return config;
//   },
// };

// example 1. for another package
// const { override } = require("customize-cra");

// const supportMjs = () => (webpackConfig) => {
//   webpackConfig.module.rules.push({
//     test: /\.mjs$/,
//     include: /node_modules/,
//     type: "javascript/auto",
//   });
//   return webpackConfig;
// };
