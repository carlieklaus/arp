module.exports = {
  siteUrl: process.env.NEXT_PUBLIC_URL || "https://authorreputationpress.com/",
  generateRobotsTxt: true, // (optional)
  sitemapSize: 7000,
  exclude: [
    "/upload-authors",
    "/upload-royalties",
    "/serversitemap.xml",
    "/login",
    "/sitemap.xml",
    "/sitemap-0.xml",
  ],
  robotsTxtOptions: {
    additionalSitemaps: ["https://authorreputationpress.com/serversitemap.xml"],
    policies: [
      {
        userAgent: "*",
        disallow: ["/login", "/upload-royalties", "/upload-authors"],
      },
    ],
  },
};
