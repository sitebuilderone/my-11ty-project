module.exports = function(eleventyConfig) {
  // Copy the `css` directory to the output
  eleventyConfig.addPassthroughCopy("css");

  return {
    dir: {
      input: "src",
      output: "dist"
    }
  };
};
