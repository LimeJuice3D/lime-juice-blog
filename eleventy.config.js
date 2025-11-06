
module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy("./assets/css/");
  eleventyConfig.addWatchTarget("./assets/css/");

  eleventyConfig.addPassthroughCopy("./assets/images/");
  eleventyConfig.addWatchTarget("./assets/images/");

};
