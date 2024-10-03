'use client'
import 'bootstrap/dist/css/bootstrap.min.css';
import "@/styles/Footer.css";

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
                {children}
            </body>
        </html>
    )
}