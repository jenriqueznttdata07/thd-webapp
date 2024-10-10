'use client'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import "@/styles/Footer.css";
import ReduxProvider from './store/ReduxProvider';

interface RootLayoutProps {
    children: React.ReactNode
}

export default function RootLayout({ children }: RootLayoutProps) {
    return (
        <html lang="en">
            <head>
                <title>The Home Depot</title>
                <meta name="description" content="The Home Depot Webapp for bootcamp" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </head>
            <body>
                <ReduxProvider>{children}</ReduxProvider>
            </body>
        </html>
    )
}