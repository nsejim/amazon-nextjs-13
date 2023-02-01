import Header from './components/Header'
import './globals.css'
import { Providers } from './providers/provider'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body>
        <Providers>
          {/*
        // @ts-expect-error  */}
          <Header />
          {children}
        </Providers>

      </body>
    </html>
  )
}
