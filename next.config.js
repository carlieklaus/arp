const path = require("path");

module.exports = {
  sassOptions: {
    includePaths: [path.join(__dirname, "styles")],
  },
  trailingSlash: true,
  i18n: {
    locales: ["en", "ar"],
    defaultLocale: "en",
  },
  images: {
    domains: ["res.cloudinary.com"],
  },
  async redirects() {
    return [
      {
        source: "/book-exhibition-international-show",
        destination: "/services/book-events/international-show/",
        permanent: true,
      },
      {
        source: "/book-exhibit-package-national-show/",
        destination: "/services/book-events/national-show/",
        permanent: true,
      },
      {
        source: "/book-signing-national/",
        destination: "/services/book-events/national-book-signing/",
        permanent: true,
      },
      {
        source: "/book-exhibit-nts/",
        destination: "/services/book-events/nts/",
        permanent: true,
      },
      {
        source: "/book-exhibit-package-international-show/",
        destination: "/services/book-events/package-international-show/",
        permanent: true,
      },
      {
        source: "/book-exhibit-package-national-show/",
        destination: "/services/book-events/package-national-show/",
        permanent: true,
      },
      {
        source: "/book-signing-international/",
        destination: "/services/book-events/international-book-signing/",
        permanent: true,
      },
      {
        source: "/extensive-library-outreach-campaign/",
        destination:
          "/services/bookstore-fundamentals/extensive-library-outreach-campaign/",
        permanent: true,
      },
      {
        source: "/ingram-distribution/",
        destination: "/services/bookstore-fundamentals/ingram-distribution/",
        permanent: true,
      },
      {
        source: "/printed-materials/",
        destination: "/services/bookstore-fundamentals/printed-materials/",
        permanent: true,
      },
      {
        source: "/book-returnability-program/",
        destination:
          "/services/bookstore-fundamentals/book-returnability-program/",
        permanent: true,
      },
      {
        source: "/100-book-royalty-program/",
        destination: "/services/bookstore-fundamentals/book-royalty-program/",
        permanent: true,
      },
      {
        source: "/special-stockpiling/",
        destination: "/services/bookstore-fundamentals/special-stockpiling/",
        permanent: true,
      },
      {
        source: "/black-and-white/",
        destination: "/services/content-creativity/black-and-white/",
        permanent: true,
      },
      {
        source: "/childrens-book-packages/",
        destination: "/services/content-creativity/childrens-book/",
        permanent: true,
      },
      {
        source: "/copy-editing/",
        destination: "/services/content-creativity/copy-editing/",
        permanent: true,
      },
      {
        source: "/illustration-services/",
        destination: "/services/content-creativity/illustration-services/",
        permanent: true,
      },
      {
        source: "/translation-service-spanish/",
        destination:
          "/services/content-creativity/translation-service-spanish/",
        permanent: true,
      },
      {
        source: "/data-entry/",
        destination: "/services/content-creativity/data-entry/",
        permanent: true,
      },
      {
        source: "/full-color/",
        destination: "/services/content-creativity/full-color/",
        permanent: true,
      },
      {
        source: "/advanced-editorial-service/",
        destination: "/services/content-creativity/advanced-editorial-service/",
        permanent: true,
      },
      {
        source: "/book-indexing-services/",
        destination: "/services/content-creativity/book-indexing/",
        permanent: true,
      },
      {
        source: "/image-enhancement-manipulation/",
        destination:
          "/services/content-creativity/image-enhancement-manipulation/",
        permanent: true,
      },
      {
        source: "/audiobook-service/",
        destination: "/services/content-creativity/audiobook-service/",
        permanent: true,
      },
      {
        source: "/comprehensive-facebook-ad-campaign/",
        destination: "/services/powerhouse/comprehensive-facebook-ad/",
        permanent: true,
      },
      {
        source: "/author-spotlight-full-production/",
        destination: "/services/powerhouse/author-spotlight-full-production/",
        permanent: true,
      },
      {
        source: "/hollywood-book-to-screen/",
        destination: "/services/powerhouse/hollywood-book-to-screen/",
        permanent: true,
      },
      {
        source: "/premium-seo-service/",
        destination: "/services/powerhouse/premium-seo-service/",
        permanent: true,
      },
      {
        source: "/press-release/",
        destination: "/services/powerhouse/press-release-service/",
        permanent: true,
      },
      {
        source: "/advance-radio-interview/",
        destination: "/services/powerhouse/advance-radio-interview/",
        permanent: true,
      },
      {
        source: "/internet-based-marketing/",
        destination: "/services/powerhouse/internet-based-marketing/",
        permanent: true,
      },
      {
        source: "/print-ad-trio-blast/",
        destination: "/services/powerhouse/print-ad-trio-blast/",
        permanent: true,
      },
      {
        source: "/social-media-blast/",
        destination: "/services/powerhouse/social-media-blast/",
        permanent: true,
      },
      {
        source: "/premium-tv-advertising/",
        destination: "/services/powerhouse/premium-tv-advertising/",
        permanent: true,
      },
      {
        source: "/amazon-booksellers-campaign/",
        destination: "/services/powerhouse/amazon-booksellers-campaign/",
        permanent: true,
      },
      {
        source: "/publishers-review/",
        destination: "/services/powerhouse/publishers-review/",
        permanent: true,
      },
      {
        source: "/publisher-weekly-magazine/",
        destination: "/services/powerhouse/publisher-weekly-magazine/",
        permanent: true,
      },
      {
        source: "/publisher-weekly-magazine/",
        destination: "/services/powerhouse/publisher-weekly-magazine/",
        permanent: true,
      },
      {
        source: "/the-new-york-review-of-books-advertising/",
        destination: "/services/powerhouse/the-new-york-review-of-books/",
        permanent: true,
      },
      {
        source: "/branding-and-marketing-strategy/",
        destination: "/services/powerhouse/branding-and-marketing-strategy/",
        permanent: true,
      },
      {
        source: "/online-video-discovery/",
        destination: "/services/powerhouse/online-video-discovery/",
        permanent: true,
      },
      {
        source: "/credibility-and-recognition/",
        destination: "/services/powerhouse/credibility-and-recognition/",
        permanent: true,
      },
      {
        source: "/inside-the-vatican-ads/",
        destination: "/services/powerhouse/inside-the-vatican-ads/",
        permanent: true,
      },
      {
        source: "/extensive-blog-posting-campaign/",
        destination: "/services/powerhouse/extensive-blog-posting-campaign/",
        permanent: true,
      },
      {
        source: "/cinematic-book-trailer/",
        destination: "/services/powerhouse/cinematic-book-trailer/",
        permanent: true,
      },
      {
        source: "/advance-book-trailer/",
        destination: "/services/powerhouse/advance-book-trailer/",
        permanent: true,
      },
      {
        source: "/author-publicity-spotlight/",
        destination: "/services/powerhouse/author-publicity-spotlight/",
        permanent: true,
      },
      {
        source: "/radio-interview/",
        destination: "/services/powerhouse/radio-interview/",
        permanent: true,
      },
      {
        source: "/cbs-radio-interview-on-people-of-distinction/",
        destination: "/services/powerhouse/cbs-radio-interview/",
        permanent: true,
      },
      {
        source: "/extensive-media-coverage/",
        destination: "/services/powerhouse/extensive-media-coverage/",
        permanent: true,
      },
      {
        source: "/advanced-youtube-promotion/",
        destination: "/services/powerhouse/advanced-youtube-promotion/",
        permanent: true,
      },
    ];
  },
};
