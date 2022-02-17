module.exports = {
  siteUrl: process.env.NEXT_PUBLIC_URL || "https://authorreputationpress.com/",
  generateRobotsTxt: true, // (optional)
  sitemapBaseFileName: "sitemap0",
  exclude: [
    "/upload-authors",
    "/upload-royalties",
    "/serversitemap.xml",
    "/login",
    "/sitemap.xml",
    "/sitemap-0.xml",
    "/book-shipping",
    "/careers",
    "/delivery-policy",
    "/privacy-policy",
    "/profile",
    "/refund-policy",
    "/royalties",
    "/sign-up",
    "/terms-of-service",
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
