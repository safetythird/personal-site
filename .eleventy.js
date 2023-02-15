const { DateTime } = require("luxon");
const pluginBundle = require("@11ty/eleventy-plugin-bundle");
const eleventyNavigationPlugin = require("@11ty/eleventy-navigation");

module.exports = function(eleventyConfig) {
  eleventyConfig.addPlugin(pluginBundle);
  eleventyConfig.addPlugin(eleventyNavigationPlugin);
  eleventyConfig.addFilter("formatDate", (dateObj, format, zone) => {
		// Formatting tokens for Luxon: https://moment.github.io/luxon/#/formatting?id=table-of-tokens
		return DateTime
      .fromJSDate(dateObj, { zone: zone || "America/Los_Angeles" })
      .toFormat(format || "dd LLLL yyyy");
	});
  return {
    dir: {
      input: "src"
    }
  }
};
