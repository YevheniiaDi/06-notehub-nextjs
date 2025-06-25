import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import TanStackProvider from "../components/TanStackProvider/TanStackProvider";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import "../globals.css";

export const metadata: Metadata = {
  title: "NoteHub",
  description: "A simple note-taking app built with Next.js",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={GeistSans.className}>
        <TanStackProvider>
          <Header />
          <main>{children}</main>
          <Footer />
        </TanStackProvider>
      </body>
    </html>
  );
}

