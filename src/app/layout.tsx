import { Metadata } from "next";
import { Inter } from "next/font/google";
import colors from "tailwindcss/colors";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "ToastedDictionary",
    template: "%s | ToastedDictionary",
  },
  description: "Your one-stop-shop for any toasted words.",
  themeColor: colors.orange["600"],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={[inter.className, "dark"].join(" ")}>
        <main>{children}</main>
      </body>
    </html>
  );
}
