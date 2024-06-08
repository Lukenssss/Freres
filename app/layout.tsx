import type { Metadata, Viewport } from 'next'
import { Inter, Roboto } from 'next/font/google'
import './globals.css'

const inter = Roboto({ subsets: ['latin'], weight: ['300'], })

export const viewport: Viewport = {
  colorScheme: 'normal',
  themeColor: '',
}

export const metadata: Metadata = {
  title: 'Freres | 🧢',
  description: '',
  icons: {
    icon: '',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
      </body>
    </html>
  )
}
