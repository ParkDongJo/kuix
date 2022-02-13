const path = require("path");
const toPath = (_path) => path.join(process.cwd(), _path);

module.exports = {
  stories: [
    "../src/**/*.stories.(js|mdx|tsx)",
    "../src/components/*.@(js|mdx|tsx)",
  ],
  addons: [
    "@storybook/addon-actions",
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-knobs/register",
  ],

  webpackFinal: async (config, { configType }) => {
    config.module.rules.push({
      test: /\.(ts|tsx)$/,
      use: [
        {
          loader: require.resolve("babel-loader"),
          options: {
            presets: [["react-app", { flow: false, typescript: true }]],
          },
        },
        require.resolve("react-docgen-typescript-loader"),
      ],
    });
    config.resolve.extensions.push(".ts", ".tsx");
    return config;
  },
};
