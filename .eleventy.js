const eleventyNavigationPlugin = require("@11ty/eleventy-navigation");
const syntaxHighlight = require("@11ty/eleventy-plugin-syntaxhighlight");

module.exports = function(eleventyConfig) {
  // Add plugins
  eleventyConfig.addPlugin(eleventyNavigationPlugin);
  eleventyConfig.addPlugin(syntaxHighlight);

  // Copy the `css` directory to the output
  eleventyConfig.addPassthroughCopy("css");

  // Add dateToRfc822 filter
  eleventyConfig.addFilter('dateToRfc822', function(date) {
    return new Date(date).toUTCString();
  });

  // Add absoluteUrl filter
  eleventyConfig.addFilter('absoluteUrl', function(url, base) {
    try {
      return new URL(url, base).toString();
    } catch(e) {
      console.error("Invalid URL:", url, base);
      return url;
    }
  });

  // Add htmlDateString filter (often used with absoluteUrl)
  eleventyConfig.addFilter('htmlDateString', (dateObj) => {
    return dateObj.toISOString().split('T')[0];
  });

  return {
    dir: {
      input: "src",
      output: "public"
    }
  };
};