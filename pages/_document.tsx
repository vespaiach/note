import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head />
        <body className="bg-slate-50 leading-7">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
