import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { ThemeProvider } from "@/components/theme-provider"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Agrícolas Telnar S.A.S. - Productos Agrícolas de Alta Calidad",
  description:
    "Agrícolas Telnar S.A.S. – Proveedores líderes de vegetales frescos y procesados con tecnología de punta y compromiso ambiental. Calidad certificada desde 2009",
  keywords:
    "productos agrícolas calidad Colombia, proveedor vegetales frescos, mango congelado, trazabilidad alimentaria, empresa agrícola sostenible",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          <div className="flex flex-col min-h-screen">
            <Header />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}

