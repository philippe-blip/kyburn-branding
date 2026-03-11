module.exports = function (eleventyConfig) {
  // Passthrough copy — serve these files as-is
  eleventyConfig.addPassthroughCopy("src/css");
  eleventyConfig.addPassthroughCopy("src/js");
  eleventyConfig.addPassthroughCopy("src/assets");
  eleventyConfig.addPassthroughCopy("src/robots.txt");

  // Blog collection sorted by date
  eleventyConfig.addCollection("blog", (collectionApi) =>
    collectionApi.getFilteredByGlob("src/blog/**/*.md").sort((a, b) => b.date - a.date)
  );

  // Date filter for sitemap / blog
  eleventyConfig.addFilter("isoDate", (date) =>
    (date instanceof Date ? date : new Date(date)).toISOString().split("T")[0]
  );

  return {
    dir: { input: "src", output: "_site" },
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk",
  };
};
