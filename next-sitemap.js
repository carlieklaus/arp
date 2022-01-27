module.exports = {
  siteUrl: process.env.NEXT_PUBLIC_URL || "https://authorreputationpress.com/",
  generateRobotsTxt: true, // (optional)
  sitemapSize: 7000,
  exclude: ["/upload-authors", "/upload-royalties", "/server-sitemap.xml"],
  robotsTxtOptions: {
    additionalSitemaps: [
      "/server-sitemap.xml", // <==== Add here
    ],
  },
};
