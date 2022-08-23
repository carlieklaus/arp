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
          <script
            async
            src="https://www.googletagmanager.com/gtag/js?id=UA-188319408-1"
          />
          <script src="/scripts/googleanalytics.js"></script>
          <div
            hidden
            id="snipcart"
            data-api-key={`${process.env.SNIPCART_SECRET_KEY}`}
            data-config-modal-style="side"
          >
            <billing section="top">
              <fieldset class="snipcart-form__set">
                <div class="snipcart-form__field">
                  <snipcart-label class="snipcart__font--tiny" for="phone">
                    Phone Number
                  </snipcart-label>
                  <snipcart-input name="phone"></snipcart-input>
                </div>
              </fieldset>
            </billing>

            <billing section="bottom">
              <fieldset class="snipcart-form__set">
                <div class="snipcart-form__field">
                  <div class="snipcart-form__field-checkbox">
                    <snipcart-checkbox name="disclaimer"></snipcart-checkbox>
                    <snipcart-label
                      for="disclaimer"
                      class="snipcart__font--tiny snipcart-form__label--checkbox"
                    >
                      By checking the box, you agree to receive calls and email
                      notification from ARP for order updates.
                    </snipcart-label>
                  </div>
                </div>
              </fieldset>
            </billing>
          </div>
        </body>
      </Html>
    );
  }
}

export default MyDocument;
