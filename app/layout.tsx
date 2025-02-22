import "./globals.css"
import { Inter } from "next/font/google"
import type React from "react"
import type { Metadata } from "next"
import MouseMoveEffect from "@/components/mouse-move-effect"
import { Toaster } from "sonner"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Brio - A Nova Ágora Digital para o Conhecimento Colaborativo",
  icons: {
    icon: "/Icon.svg"
  },
  description: "Plataforma aberta onde o conhecimento é central, acessível e democrático. Uma Ágora moderna para pensadores, cientistas e aprendizes colaborarem e compartilharem conhecimento.",
  keywords: ["conhecimento", "educação", "colaboração", "ciência", "pesquisa", "biblioteca digital", "fórum acadêmico", "aprendizado colaborativo"],
  authors: [{ name: "Maicon Pereira Barbosa" }],
  creator: "Maicon Pereira Barbosa",
  publisher: "Brio Platform",
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "https://brioplataform.online",
    title: "Brio - Conhecimento Colaborativo",
    description: "A nova Biblioteca de Alexandria do século XXI. Plataforma de conhecimento colaborativo com debates produtivos e acesso livre a conteúdos de impacto.",
    siteName: "Brio"
  },
  twitter: {
    card: "summary_large_image",
    title: "Brio - Conhecimento Colaborativo",
    description: "Democratizando o conhecimento através da colaboração. Junte-se à maior comunidade de aprendizado do Brasil."
  },
  generator: "Next.js",
  applicationName: "Brio",
  referrer: "origin-when-cross-origin",
  robots: "index, follow"
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR" className="dark">
      <body className={`${inter.className} bg-background text-foreground antialiased`}>
        <MouseMoveEffect />
        {children}
        <Toaster />
      </body>
    </html>
  )
}



import './globals.css'