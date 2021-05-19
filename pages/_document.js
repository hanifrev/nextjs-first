import Document, { Head, Main, NextScript } from "next/document";

export default class MyDocument extends Document {
  render() {
    return (
      <html>
        <Head>
          <link
            rel="stylesheet"
            href={`${this.props.__NEXT_DATA__.assetPrefix}/_next/static/style.css`}
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Ubuntu:wght@300;400;500;700&display=swap"
            rel="stylesheet"
          />
          <meta http-equiv="Content-Security-Policy" content="upgrade-insecure-requests" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}
