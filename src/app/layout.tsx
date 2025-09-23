import "./globals.css";
import { Montserrat } from 'next/font/google'

import { Components } from '@/components'

const font = Montserrat({
  subsets: ['latin']
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={font.className} cz-shortcut-listen="true">
        <div className="flex flex-col min-h-screen">
          <Components.Layout.Header.Root>
            <Components.Layout.Header.Button href="/obras" text="Obras" />
            <Components.Layout.Header.Button href="/about" text="Sobre" />
            <Components.Layout.Header.Button href="/equipe" text="Equipe" />
            <Components.Layout.Header.Button href="/login" text="Entrar" />
          </Components.Layout.Header.Root>
          {children}
        </div>
      </body>
    </html>
  );
}
