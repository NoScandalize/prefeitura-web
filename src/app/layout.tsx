import "./globals.css";

import { Components } from '@/components'

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body
        className={`antialiased`} cz-shortcut-listen="true"
      >
        <Components.Layout.Header />
        {children}
      </body>
    </html>
  );
}
