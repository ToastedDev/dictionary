import { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "Toasted Dictionary",
    template: "%s | Toasted Dictionary",
  },
  description: "Your one-stop-shop for any toasted words.",
  themeColor: "#ff7d00",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <main className="p-6">{children}</main>
      </body>
    </html>
  );
}
