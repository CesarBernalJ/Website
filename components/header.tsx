"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import FallbackImage from "@/components/fallback-image"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <header className="bg-white border-b border-telnar-green/20 sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <div className="relative w-12 h-12 md:w-16 md:h-16">
              <FallbackImage
                src="/images/telnar-logo.png"
                alt="Agrícolas Telnar S.A.S."
                fill
                className="object-contain"
              />
            </div>
            <span className="ml-3 text-telnar-dark font-semibold hidden md:inline-block">Agrícolas Telnar S.A.S.</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-telnar-dark hover:text-telnar-orange font-medium">
              Inicio
            </Link>
            <Link href="/nosotros" className="text-telnar-dark hover:text-telnar-orange font-medium">
              Quiénes Somos
            </Link>
            <Link href="/productos" className="text-telnar-dark hover:text-telnar-orange font-medium">
              Productos
            </Link>
            <Link href="/clientes" className="text-telnar-dark hover:text-telnar-orange font-medium">
              Clientes
            </Link>
            <Link href="/innovacion" className="text-telnar-dark hover:text-telnar-orange font-medium">
              Innovación
            </Link>
            <Link href="/sostenibilidad" className="text-telnar-dark hover:text-telnar-orange font-medium">
              Sostenibilidad
            </Link>
            <Link href="/blog" className="text-telnar-dark hover:text-telnar-orange font-medium">
              Blog
            </Link>
            <Link href="/version-html" className="text-telnar-dark hover:text-telnar-orange font-medium">
              Versión HTML
            </Link>
            <Button asChild className="bg-telnar-orange hover:bg-telnar-orange/90 text-white">
              <Link href="/contacto">Contacto</Link>
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={toggleMenu}
            aria-label={isMenuOpen ? "Cerrar menú" : "Abrir menú"}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-telnar-green/20">
          <div className="container mx-auto px-4 py-4">
            <nav className="flex flex-col space-y-4">
              <Link
                href="/"
                className="text-telnar-dark hover:text-telnar-orange font-medium py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Inicio
              </Link>
              <Link
                href="/nosotros"
                className="text-telnar-dark hover:text-telnar-orange font-medium py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Quiénes Somos
              </Link>
              <Link
                href="/productos"
                className="text-telnar-dark hover:text-telnar-orange font-medium py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Productos
              </Link>
              <Link
                href="/clientes"
                className="text-telnar-dark hover:text-telnar-orange font-medium py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Clientes
              </Link>
              <Link
                href="/innovacion"
                className="text-telnar-dark hover:text-telnar-orange font-medium py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Innovación
              </Link>
              <Link
                href="/sostenibilidad"
                className="text-telnar-dark hover:text-telnar-orange font-medium py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Sostenibilidad
              </Link>
              <Link
                href="/blog"
                className="text-telnar-dark hover:text-telnar-orange font-medium py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Blog
              </Link>
              <Link
                href="/version-html"
                className="text-telnar-dark hover:text-telnar-orange font-medium py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Versión HTML
              </Link>
              <Link
                href="/descargar"
                className="text-telnar-dark hover:text-telnar-orange font-medium py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Descargar
              </Link>
              <Button
                asChild
                className="bg-telnar-orange hover:bg-telnar-orange/90 text-white w-full"
                onClick={() => setIsMenuOpen(false)}
              >
                <Link href="/contacto">Contacto</Link>
              </Button>
            </nav>
          </div>
        </div>
      )}
    </header>
  )
}

