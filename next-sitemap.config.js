/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: "https://evespireedu.com",
  generateRobotsTxt: true,
  changefreq: "weekly",
  priority: 0.7,
  sitemapSize: 7000,
  outDir: "./public",
  exclude: ["/api/*", "/_next/*"],
  transform: async (config, path) => {
    return {
      loc: path,
      changefreq: path === "/" ? "daily" : "weekly",
      priority: path === "/" ? 1.0 : 0.7,
      lastmod: new Date().toISOString(),
    };
  },
};
