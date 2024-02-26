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
        <meta property="og:image" content="https://vercel.com/_next/image?url=%2Fapi%2Fscreenshot%3Fdark%3D1%26deploymentId%3Ddpl_6Aymeee673S5WaxfHdLgSWphfRun%26teamId%3Dsebascm-devs-projects%26withStatus%3D1&w=640&q=75&dpl=dpl_B637TkFA1w3hCbDXs2kAS4AMyyZK" />
        <meta property="og:url" content="https://portfolio-scm.vercel.app/" />


      </head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
