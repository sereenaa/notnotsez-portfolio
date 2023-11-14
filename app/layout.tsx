import '../global.css';
import { Inter } from 'next/font/google';
import LocalFont from 'next/font/local';
import { Metadata } from 'next';
import { Analytics } from "./components/analytics";

export const metadata: Metadata = {
  title: {
    default: "notnotsez's portfolio",
    template: "%s | notnotsez",
  },
  description: "Data engineer learning full stack dev. Follow me on my journey into Web3. ",
  openGraph: {
    title: "notnotsez-portfolio.vercel.app/",
    description:
      "Data engineer learning full stack dev. Follow me on my journey into Web3.",
    url: "https://notnotsez-portfolio.vercel.app/",
    siteName: "notnotsez-portfolio.vercel.app/",
    images: [
      {
        url: "https://chronark.com/og.png",
        width: 1920,
        height: 1080,
      },
    ],
    locale: "en-US",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  twitter: {
    title: "Chronark",
    card: "summary_large_image",
  },
  icons: {
    shortcut: "/mfer.png",
  },
};
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const calSans = LocalFont({
  src: "../public/fonts/CalSans-SemiBold.ttf",
  variable: "--font-calsans",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={[inter.variable, calSans.variable].join(" ")}>
      <head>
        <Analytics />
      </head>
      <body
        className={`bg-black ${process.env.NODE_ENV === "development" ? "debug-screens" : undefined
          }`}
      >
        {children}
      </body>
    </html>
  );
}
