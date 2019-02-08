import Document, { Head, Main, NextScript } from 'next/document';

class CustomDocument extends Document {
    render() {
        return (
            <html>
            <Head>
                <link href='https://fonts.googleapis.com/css?family=Raleway:400,500,600,700,800' rel='stylesheet' type='text/css' />
                <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/github-markdown-css/3.0.1/github-markdown.css" />
            </Head>
            <body>
            <div className="wrapper">
                <Main/>
            </div>
            <NextScript/>
            </body>
            <scrpt>
                <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.3/jquery.min.js"></script>
                <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/js/bootstrap.min.js"></script>
            </scrpt>
            </html>
        );
    }
}

export default CustomDocument;