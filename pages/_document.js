import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    const { locale } = this.props.__NEXT_DATA__;
    const dir = locale === "ar" ? "rtl" : "ltr";
    return (
      <Html>
        <Head>
          <link rel="icon" type="image/png" href="/images/logo-book.png"></link>
          <link rel="preconnect" href="https://app.snipcart.com" />
          <link rel="preconnect" href="https://cdn.snipcart.com" />
          <link
            rel="stylesheet"
            href="https://cdn.snipcart.com/themes/v3.3.1/default/snipcart.css"
          />
        </Head>
        <body dir={dir} lang={locale}>
          <Main />
          <NextScript />
          <script
            async
            src="https://cdn.snipcart.com/themes/v3.3.1/default/snipcart.js"
          ></script>
          {/* <script async src="/scripts/olark.js"></script> */}

          <div
            hidden
            id="snipcart"
            data-api-key={`${process.env.SNIPCART_SECRET_KEY}`}
            data-config-modal-style="side"
          ></div>
        </body>
      </Html>
    );
  }
}

export default MyDocument;
