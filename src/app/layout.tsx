import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: "Sebastian's Portfolio",
  description: 'Estudiante centrado en informática y programación con experiencia como técnico informático de nivel medio y desarrollador web. Apasionado por adquirir conocimientos en desarrollo de software y tecnologías emergentes. En constante búsqueda de oportunidades para ampliar mis conocimientos en este campo.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <head>
        <link rel="shortcut icon" href="src/app/favicon.ico" type="image/x-icon" />
        <title>Sebastián Portfolio🌎</title>
        <meta name="description" content="Estudiante centrado en informática y programación con experiencia como técnico informático de nivel medio y desarrollador web. Apasionado por adquirir conocimientos en desarrollo de software y tecnologías emergentes. En constante búsqueda de oportunidades para ampliar mis conocimientos en este campo." />

        <meta property="og:title" content="Sebastian's Portfolio" />
        <meta property="og:description" content="Estudiante centrado en informática y programación con experiencia como técnico informático de nivel medio y desarrollador web. Apasionado por adquirir conocimientos en desarrollo de software y tecnologías emergentes. En constante búsqueda de oportunidades para ampliar mis conocimientos en este campo." />
        <meta property="og:image" content="img/portfolio-scm.png" />
        <meta property="og:url" content="https://portfolio-scm.vercel.app/" />


      </head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
