import Link from "next/link"
import { Facebook, Instagram, Twitter, Linkedin, MapPin, Phone, Mail } from "lucide-react"
import FallbackImage from "@/components/fallback-image"

export default function Footer() {
  return (
    <footer className="bg-telnar-dark text-telnar-cream">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center mb-4">
              <div className="relative w-12 h-12">
                <FallbackImage
                  src="/images/telnar-logo.png"
                  alt="Agrícolas Telnar S.A.S."
                  fill
                  className="object-contain"
                />
              </div>
              <span className="ml-3 text-telnar-cream font-semibold">Agrícolas Telnar S.A.S.</span>
            </div>
            <p className="text-telnar-cream/70 mb-4">Calidad, Inocuidad y Compromiso Ambiental desde 2009</p>
            <div className="flex space-x-4">
              <Link href="#" className="text-telnar-cream/70 hover:text-telnar-orange">
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link href="#" className="text-telnar-cream/70 hover:text-telnar-orange">
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link href="#" className="text-telnar-cream/70 hover:text-telnar-orange">
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link href="#" className="text-telnar-cream/70 hover:text-telnar-orange">
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Enlaces Rápidos</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/nosotros" className="text-telnar-cream/70 hover:text-telnar-orange">
                  Quiénes Somos
                </Link>
              </li>
              <li>
                <Link href="/productos" className="text-telnar-cream/70 hover:text-telnar-orange">
                  Productos
                </Link>
              </li>
              <li>
                <Link href="/clientes" className="text-telnar-cream/70 hover:text-telnar-orange">
                  Clientes
                </Link>
              </li>
              <li>
                <Link href="/innovacion" className="text-telnar-cream/70 hover:text-telnar-orange">
                  Innovación
                </Link>
              </li>
              <li>
                <Link href="/sostenibilidad" className="text-telnar-cream/70 hover:text-telnar-orange">
                  Sostenibilidad
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-telnar-cream/70 hover:text-telnar-orange">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/version-html" className="text-telnar-cream/70 hover:text-telnar-orange">
                  Versión HTML
                </Link>
              </li>
              <li>
                <Link href="/contacto" className="text-telnar-cream/70 hover:text-telnar-orange">
                  Contacto
                </Link>
              </li>
            </ul>
          </div>

          {/* Products */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Nuestros Productos</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/productos#frescos" className="text-telnar-cream/70 hover:text-telnar-orange">
                  Vegetales Frescos
                </Link>
              </li>
              <li>
                <Link href="/productos#procesados" className="text-telnar-cream/70 hover:text-telnar-orange">
                  Mango Congelado
                </Link>
              </li>
              <li>
                <Link href="/productos#procesados" className="text-telnar-cream/70 hover:text-telnar-orange">
                  Mora Congelada
                </Link>
              </li>
              <li>
                <Link href="/productos#certificaciones" className="text-telnar-cream/70 hover:text-telnar-orange">
                  Certificaciones
                </Link>
              </li>
              <li>
                <Link href="/productos#trazabilidad" className="text-telnar-cream/70 hover:text-telnar-orange">
                  Trazabilidad
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contacto</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 text-telnar-orange mr-2 mt-0.5" />
                <span className="text-telnar-cream/70">Colombia</span>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 text-telnar-orange mr-2" />
                <span className="text-telnar-cream/70">+57 (123) 456-7890</span>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 text-telnar-orange mr-2" />
                <a href="mailto:info@telnar.com.co" className="text-telnar-cream/70 hover:text-telnar-orange">
                  info@telnar.com.co
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-telnar-green/20 mt-12 pt-8 text-center text-telnar-cream/70">
          <p>© {new Date().getFullYear()} Agrícolas Telnar S.A.S. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  )
}

