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
        <Components.Layout.Header.Root>
          <Components.Layout.Header.Button href="/obras" text="Obras" />
          <Components.Layout.Header.Button href="/about" text="Sobre" />
          <Components.Layout.Header.Button href="/equipe" text="Equipe" />
          <Components.Layout.Header.Button href="/login" text="Entrar" />
        </Components.Layout.Header.Root>
        {children}
      </body>
    </html>
  );
}
