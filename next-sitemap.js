module.exports = {
  siteUrl: process.env.NEXT_PUBLIC_URL || "https://authorreputationpress.com/",
  generateRobotsTxt: true, // (optional)
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
  transform: async (config, path) => {
    // Use default transformation for all other cases
    return {
      loc: path, // => this will be exported as http(s)://<config.siteUrl>/<path>
      lastmod: config.autoLastmod ? new Date().toISOString() : undefined,
      alternateRefs: config.alternateRefs ?? [],
    };
  },
};
