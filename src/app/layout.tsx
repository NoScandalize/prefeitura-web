import "./globals.css";

import { Header } from '@/components/header'

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`antialiased`} cz-shortcut-listen="true"
      >
        <Header />
        {children}
        <footer>

        </footer>
      </body>
    </html>
  );
}
