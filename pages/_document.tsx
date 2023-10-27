import Document, { Head, Html, Main, NextScript } from "next/document";

class MyDocument extends Document {
    render() {
        return (
            <Html lang="en">
                <Head>
                    <link rel="icon" href="/favicon.ico" />
                    <meta
                        name="description"
                        content="Generate stunning product photoshoots with the power of AI."
                    />
                    <meta
                        property="og:site_name"
                        content="productshoots.varunbalani.com"
                    />
                    <meta
                        property="og:description"
                        content="Generate stunning product photoshoots with the power of AI."
                    />
                    <meta property="og:title" content="AI Product Shoots" />
                    <meta name="twitter:card" content="summary_large_image" />
                    <meta name="twitter:title" content="AI Product Shoots" />
                    <meta
                        name="twitter:description"
                        content="Generate stunning product photoshoots with the power of AI."
                    />
                    <meta property="og:image" content="" />
                    <meta name="twitter:image" content="" />
                    <link
                        rel="preconnect"
                        href="https://fonts.googleapis.com"
                    ></link>
                    <link
                        rel="preconnect"
                        href="https://fonts.gstatic.com"
                    ></link>
                    <link
                        href="https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;800;900&display=swap"
                        rel="stylesheet"
                    ></link>
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        );
    }
}

export default MyDocument;
