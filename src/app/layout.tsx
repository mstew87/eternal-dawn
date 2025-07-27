import type { Metadata } from 'next'
import { Inter, Orbitron, Cinzel, UnifrakturMaguntia, Playfair_Display, Crimson_Text } from 'next/font/google'
import './globals.css'
import Layout from '@/components/layout/Layout'

const inter = Inter({ subsets: ['latin'] })
const orbitron = Orbitron({ 
  subsets: ['latin'],
  variable: '--font-orbitron'
})

const cinzel = Cinzel({ 
  subsets: ['latin'],
  variable: '--font-cinzel'
})

const unifraktur = UnifrakturMaguntia({ 
  subsets: ['latin'],
  variable: '--font-unifraktur',
  weight: '400'
})

const playfair = Playfair_Display({ 
  subsets: ['latin'],
  variable: '--font-playfair'
})

const crimson = Crimson_Text({ 
  subsets: ['latin'],
  variable: '--font-crimson',
  weight: '400'
})

export const metadata: Metadata = {
  title: 'Eternal Dawn - Gaming Community',
  description: 'Join the ultimate gaming community where legends are forged and friendships last forever',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} ${orbitron.variable} ${cinzel.variable} ${unifraktur.variable} ${playfair.variable} ${crimson.variable}`}>
        <Layout>
          {children}
        </Layout>
      </body>
    </html>
  )
}
