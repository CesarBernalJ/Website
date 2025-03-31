import Link from "next/link"
import { ArrowRight, Leaf, Star, Award, Phone } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import FallbackImage from "@/components/fallback-image"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative w-full h-[500px] md:h-[600px] overflow-hidden">
        <div className="absolute inset-0 bg-black/40 z-10" />
        <div className="absolute inset-0 z-0">
          <FallbackImage
            src="/images/hero-banner.jpg"
            alt="Productos agrícolas frescos"
            fill
            className="object-cover"
            priority
          />
        </div>
        <div className="relative z-20 container mx-auto px-4 h-full flex flex-col justify-center items-start">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">Agrícolas Telnar S.A.S.</h1>
          <p className="text-xl md:text-2xl text-white mb-8 max-w-2xl">
            Calidad, Inocuidad y Compromiso Ambiental desde 2009
          </p>
          <div className="flex flex-wrap gap-4">
            <Button asChild size="lg" className="bg-telnar-orange hover:bg-telnar-orange/90 text-white">
              <Link href="/productos">Ver Productos</Link>
            </Button>
            <Button
              asChild
              size="lg"
              className="bg-telnar-dark hover:bg-telnar-dark/90 text-white border-2 border-white"
            >
              <Link href="/contacto">Contactar</Link>
            </Button>
            <Button
              asChild
              size="lg"
              className="bg-telnar-dark hover:bg-telnar-dark/90 text-white border-2 border-white"
            >
              <Link href="/nosotros">Nuestra Misión</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Company Summary */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Más de 15 años de excelencia agrícola</h2>
            <p className="text-lg text-gray-700">
              Desde 2009, Agrícolas Telnar S.A.S. ha sido sinónimo de calidad y confianza en el mercado agrícola
              colombiano. Nuestros productos frescos y procesados abastecen a clientes destacados como Buffalo Wings y
              Sándwich Qbano, gracias a nuestra constante innovación y compromiso con la calidad.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card>
              <CardHeader className="text-center">
                <Leaf className="w-12 h-12 mx-auto text-telnar-orange mb-2" />
                <CardTitle>Sostenibilidad</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-center">
                  Comprometidos con el medio ambiente, aprovechamos el 100% de nuestros residuos orgánicos y contamos
                  con sistemas de recolección de agua.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="text-center">
                <Star className="w-12 h-12 mx-auto text-telnar-orange mb-2" />
                <CardTitle>Calidad Premium</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-center">
                  Utilizamos tecnología alemana de punta y rigurosos controles de calidad para garantizar productos
                  impecables en cada entrega.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="text-center">
                <Award className="w-12 h-12 mx-auto text-telnar-orange mb-2" />
                <CardTitle>Innovación</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-center">
                  Pioneros en productos congelados de alta calidad, ofrecemos mango y mora disponibles durante todo el
                  año manteniendo su frescura original.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Nuestros Productos Destacados</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="overflow-hidden">
              <div className="relative h-64">
                <FallbackImage src="/images/fresh-products.jpg" alt="Productos frescos" fill className="object-cover" />
              </div>
              <CardHeader>
                <CardTitle>Productos Frescos</CardTitle>
                <CardDescription>
                  Vegetales de la más alta calidad con control visual por canastas de colores
                </CardDescription>
              </CardHeader>
              <CardFooter>
                <Button asChild variant="outline" className="w-full">
                  <Link href="/productos#frescos" className="flex items-center justify-center">
                    Ver Productos Frescos
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>

            <Card className="overflow-hidden">
              <div className="relative h-64">
                <FallbackImage
                  src="/images/processed-products.jpg"
                  alt="Productos procesados"
                  fill
                  className="object-cover"
                />
              </div>
              <CardHeader>
                <CardTitle>Productos Procesados</CardTitle>
                <CardDescription>Mango y mora congelados disponibles todo el año con la misma calidad</CardDescription>
              </CardHeader>
              <CardFooter>
                <Button asChild variant="outline" className="w-full">
                  <Link href="/productos#procesados" className="flex items-center justify-center">
                    Ver Productos Procesados
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          </div>
        </div>
      </section>

      {/* Clients */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Clientes que Confían en Nosotros</h2>

          <div className="flex flex-wrap justify-center items-center gap-12 mb-12">
            <div className="w-40 h-24 relative grayscale hover:grayscale-0 transition-all">
              <FallbackImage src="/images/client-buffalo.png" alt="Buffalo Wings" fill className="object-contain" />
            </div>
            <div className="w-40 h-24 relative grayscale hover:grayscale-0 transition-all">
              <FallbackImage src="/images/client-qbano.png" alt="Sándwich Qbano" fill className="object-contain" />
            </div>
            <div className="w-40 h-24 relative grayscale hover:grayscale-0 transition-all">
              <FallbackImage src="/images/client-sipote.png" alt="Sipote Burrito" fill className="object-contain" />
            </div>
            <div className="w-40 h-24 relative grayscale hover:grayscale-0 transition-all">
              <FallbackImage src="/images/client-dosdelama.png" alt="Dos del Alma" fill className="object-contain" />
            </div>
          </div>

          <div className="max-w-2xl mx-auto bg-gray-50 p-6 rounded-lg">
            <blockquote className="text-lg italic text-gray-700 text-center">
              "Confiamos en Telnar por su calidad constante y su compromiso con la entrega puntual de productos frescos.
              Su innovación en productos congelados nos ha permitido mantener la calidad durante todo el año."
            </blockquote>
            <p className="text-right mt-4 font-semibold">— Cliente Destacado</p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-telnar-dark text-telnar-cream">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">¿Necesita productos agrícolas premium?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Descubra nuestra innovación en congelados: mango y mora disponibles todo el año con la misma calidad y
            frescura.
          </p>
          <Button asChild size="lg" className="bg-telnar-orange text-white hover:bg-telnar-orange/90">
            <Link href="/contacto" className="flex items-center">
              <Phone className="mr-2 h-5 w-5" />
              Contáctenos Hoy
            </Link>
          </Button>
        </div>
      </section>
    </div>
  )
}

