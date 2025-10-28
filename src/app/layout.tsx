import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "LODI - Smart Logistics Platform",
  description: "Connecting return trucks with loads. Book trucks on-demand like Uber for your logistics needs.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
