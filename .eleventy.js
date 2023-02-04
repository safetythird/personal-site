const pluginBundle = require("@11ty/eleventy-plugin-bundle");

module.exports = function(eleventyConfig) {
  eleventyConfig.addPlugin(pluginBundle);
  return {
    dir: {
      input: "src"
    }
  }
};
