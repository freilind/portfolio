import Document, { Html, Head, Main, NextScript, DocumentContext } from 'next/document';
import { CssBaseline } from '@nextui-org/react';

class MyDocument extends Document {
    static async getInitialProps(ctx: DocumentContext) {
        const initialProps = await Document.getInitialProps(ctx);
        return {
            ...initialProps,
            styles: [<>{initialProps.styles}</>]
        };
    }

    render() {
        return (
            <Html lang="en">
                <Head>
                    <link rel="preconnect" href="https://fonts.googleapis.com" />
                    <link rel="preconnect" href="https://fonts.gstatic.com" />
                    <link
                        rel="stylesheet"
                        href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
                    />
                    <link href="https://fonts.googleapis.com/css2?family=Inconsolata:wght@300;400;500&family=Raleway:wght@100;300;400&family=Pacifico&display=swap" rel="stylesheet"></link>
                    <link href='https://unpkg.com/boxicons@2.1.2/css/boxicons.min.css' rel='stylesheet' />

                    <link rel="alternate" href="/" hrefLang="x-default" />
                    <link rel="alternate" href="/" hrefLang="es" />
                    <link rel="alternate" href="/en" hrefLang="en" />

                    {CssBaseline.flush()}
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
