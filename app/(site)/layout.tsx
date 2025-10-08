import type { Metadata } from "next";
import { Nanum_Gothic } from "next/font/google";
import "../globals.css";
import Header from "../../components/Header";

const nanum = Nanum_Gothic({
  variable: "--font-nanum",
  subsets: ["latin"],
  weight: "700"
});

export const metadata: Metadata = {
  title: "Nicolas Cage World",
  description: "The one true God",
  icons: [
    { url:"/favicons/android-icon-192x192.png", rel:"icon", type:"image/png", sizes:"192x192" },
    { url:"/favicons/android-icon-96x96.png", rel:"icon", type:"image/png", sizes:"96x96" },
    { url:"/favicons/android-icon-32x32.png", rel:"icon", type:"image/png", sizes:"32x32" },
    { url:"/favicons/android-icon-192x192.png", rel:"icon", type:"image/png", sizes:"16x16" },
    { url:"/favicon.ico", rel:"icon" }
  ],
  openGraph: {
    type: "website"
  },
};

type RootLayoutProps = Readonly<{
  children: React.ReactNode;
}>

export default function RootLayout({
  children,
}: RootLayoutProps) {
  return (
    <html lang="en">
      <body
        className={`${nanum.variable} antialiased`}
      >
        <Header />
        <main className="container mx-auto px-4">
          {children}
        </main>
      </body>
    </html>
  );
}