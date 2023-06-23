/**
 * Metro configuration for React Native
 * https://github.com/facebook/react-native
 *
 * @format
 */

module.exports = {
  transformer: {
    getTransformOptions: async () => ({
      transform: {
        experimentalImportSupport: false,
        inlineRequires: true,
      },
    }),
  },
  project: {
    ios: {},
    android: {},
  },
  assets: [
    "./assets/fonts/Raleway-Regular.ttf",
    "./assets/fonts/Raleway-Bold.ttf",
    "./assets/fonts/Raleway-Italic.ttf",
  ],
};
