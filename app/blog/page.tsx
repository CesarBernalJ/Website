import Image from "next/image"
import Link from "next/link"
import { Calendar, Clock, Tag, ArrowRight, Search } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"

export default function BlogPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative w-full h-[300px] md:h-[400px] overflow-hidden">
        <div className="absolute inset-0 bg-black/40 z-10" />
        <Image src="/images/blog-hero.jpg" alt="Blog de Telnar" fill className="object-cover" />
        <div className="relative z-20 container mx-auto px-4 h-full flex flex-col justify-center items-start">
          <h1 className="text-3xl md:text-5xl font-bold text-white mb-4">Blog</h1>
          <p className="text-lg md:text-xl text-white max-w-2xl">
            Descubra las últimas tendencias, consejos y noticias sobre el mundo agrícola y la sostenibilidad.
          </p>
        </div>
      </section>

      {/* Search and Categories */}
      <section className="py-8 bg-gray-50 border-b border-gray-200">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-4 justify-between items-center">
            <div className="relative w-full md:w-96">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <Input type="text" placeholder="Buscar artículos..." className="pl-10 w-full" />
            </div>
            <div className="flex flex-wrap gap-2">
              <Link
                href="/blog?categoria=sostenibilidad"
                className="px-4 py-2 bg-white rounded-full text-sm font-medium text-telnar-dark hover:bg-telnar-orange/10 border border-gray-200"
              >
                Sostenibilidad
              </Link>
              <Link
                href="/blog?categoria=innovacion"
                className="px-4 py-2 bg-white rounded-full text-sm font-medium text-telnar-dark hover:bg-telnar-orange/10 border border-gray-200"
              >
                Innovación
              </Link>
              <Link
                href="/blog?categoria=agricultura"
                className="px-4 py-2 bg-white rounded-full text-sm font-medium text-telnar-dark hover:bg-telnar-orange/10 border border-gray-200"
              >
                Agricultura
              </Link>
              <Link
                href="/blog?categoria=nutricion"
                className="px-4 py-2 bg-white rounded-full text-sm font-medium text-telnar-dark hover:bg-telnar-orange/10 border border-gray-200"
              >
                Nutrición
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Article */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="relative h-[400px] rounded-lg overflow-hidden shadow-lg">
              <Image
                src="/images/blog-featured.jpg"
                alt="¿Por qué consumir productos locales?"
                fill
                className="object-cover"
              />
            </div>
            <div>
              <div className="flex items-center gap-4 mb-4">
                <span className="bg-telnar-orange/10 text-telnar-orange text-xs font-medium rounded-full px-3 py-1">
                  Destacado
                </span>
                <span className="text-sm text-gray-500 flex items-center">
                  <Calendar className="h-4 w-4 mr-1" />
                  15 de Junio, 2023
                </span>
                <span className="text-sm text-gray-500 flex items-center">
                  <Clock className="h-4 w-4 mr-1" />5 min de lectura
                </span>
              </div>
              <h2 className="text-3xl font-bold mb-4">
                ¿Por qué consumir productos locales? El impacto económico en Colombia
              </h2>
              <p className="text-gray-700 mb-6">
                Descubra cómo el consumo de productos agrícolas locales fortalece la economía colombiana, reduce la
                huella de carbono y garantiza mayor frescura y calidad en su mesa. Un análisis detallado del impacto
                positivo que genera esta práctica.
              </p>
              <div className="flex items-center gap-4 mb-6">
                <div className="flex items-center">
                  <div className="w-10 h-10 rounded-full overflow-hidden relative mr-2">
                    <Image src="/images/author-maria.jpg" alt="María Rodríguez" fill className="object-cover" />
                  </div>
                  <span className="text-sm font-medium">María Rodríguez</span>
                </div>
                <div className="flex items-center">
                  <Tag className="h-4 w-4 mr-1 text-gray-500" />
                  <span className="text-sm text-gray-500">Sostenibilidad, Economía</span>
                </div>
              </div>
              <Button asChild className="bg-telnar-orange hover:bg-telnar-orange/90 text-white">
                <Link href="/blog/por-que-consumir-productos-locales" className="flex items-center">
                  Leer Artículo Completo
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Recent Articles */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-12">
            <h2 className="text-3xl font-bold">Artículos Recientes</h2>
            <Link
              href="/blog/archivo"
              className="text-telnar-orange hover:text-telnar-orange/80 font-medium flex items-center"
            >
              Ver todos
              <ArrowRight className="ml-1 h-4 w-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="overflow-hidden">
              <div className="relative h-48">
                <Image
                  src="/images/blog-congelados.jpg"
                  alt="Tendencias en alimentos congelados"
                  fill
                  className="object-cover"
                />
              </div>
              <CardHeader>
                <div className="flex items-center gap-4 mb-2">
                  <span className="text-xs text-gray-500 flex items-center">
                    <Calendar className="h-3 w-3 mr-1" />
                    10 de Junio, 2023
                  </span>
                  <span className="text-xs text-gray-500 flex items-center">
                    <Clock className="h-3 w-3 mr-1" />4 min
                  </span>
                </div>
                <CardTitle className="text-xl">
                  Tendencias en alimentos congelados: practicidad sin perder nutrientes
                </CardTitle>
                <CardDescription>
                  Los avances en tecnología de congelación están revolucionando la industria alimentaria, permitiendo
                  conservar nutrientes y sabor.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center gap-2 mb-4">
                  <Tag className="h-4 w-4 text-gray-500" />
                  <span className="text-xs text-gray-500">Innovación, Nutrición</span>
                </div>
                <div className="flex items-center">
                  <div className="w-8 h-8 rounded-full overflow-hidden relative mr-2">
                    <Image src="/images/author-carlos.jpg" alt="Carlos Méndez" fill className="object-cover" />
                  </div>
                  <span className="text-sm">Carlos Méndez</span>
                </div>
              </CardContent>
              <CardFooter>
                <Button
                  asChild
                  variant="outline"
                  className="w-full border-telnar-orange/20 hover:bg-telnar-orange/10 hover:text-telnar-orange"
                >
                  <Link href="/blog/tendencias-alimentos-congelados">Leer más</Link>
                </Button>
              </CardFooter>
            </Card>

            <Card className="overflow-hidden">
              <div className="relative h-48">
                <Image
                  src="/images/blog-huella-hidrica.jpg"
                  alt="Cómo Telnar reduce su huella hídrica"
                  fill
                  className="object-cover"
                />
              </div>
              <CardHeader>
                <div className="flex items-center gap-4 mb-2">
                  <span className="text-xs text-gray-500 flex items-center">
                    <Calendar className="h-3 w-3 mr-1" />5 de Junio, 2023
                  </span>
                  <span className="text-xs text-gray-500 flex items-center">
                    <Clock className="h-3 w-3 mr-1" />6 min
                  </span>
                </div>
                <CardTitle className="text-xl">
                  Cómo Telnar reduce su huella hídrica: Tecnología y procesos verdes
                </CardTitle>
                <CardDescription>
                  Descubra las innovadoras tecnologías y procesos que implementamos para optimizar el uso del agua en
                  nuestra cadena de producción.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center gap-2 mb-4">
                  <Tag className="h-4 w-4 text-gray-500" />
                  <span className="text-xs text-gray-500">Sostenibilidad, Tecnología</span>
                </div>
                <div className="flex items-center">
                  <div className="w-8 h-8 rounded-full overflow-hidden relative mr-2">
                    <Image src="/images/author-ana.jpg" alt="Ana Gómez" fill className="object-cover" />
                  </div>
                  <span className="text-sm">Ana Gómez</span>
                </div>
              </CardContent>
              <CardFooter>
                <Button
                  asChild
                  variant="outline"
                  className="w-full border-telnar-orange/20 hover:bg-telnar-orange/10 hover:text-telnar-orange"
                >
                  <Link href="/blog/telnar-reduce-huella-hidrica">Leer más</Link>
                </Button>
              </CardFooter>
            </Card>

            <Card className="overflow-hidden">
              <div className="relative h-48">
                <Image
                  src="/images/blog-productores.jpg"
                  alt="Entrevista a productores aliados"
                  fill
                  className="object-cover"
                />
              </div>
              <CardHeader>
                <div className="flex items-center gap-4 mb-2">
                  <span className="text-xs text-gray-500 flex items-center">
                    <Calendar className="h-3 w-3 mr-1" />1 de Junio, 2023
                  </span>
                  <span className="text-xs text-gray-500 flex items-center">
                    <Clock className="h-3 w-3 mr-1" />8 min
                  </span>
                </div>
                <CardTitle className="text-xl">
                  Entrevista a productores aliados: Historias detrás de los vegetales
                </CardTitle>
                <CardDescription>
                  Conozca las inspiradoras historias de las familias agricultoras que trabajan con Telnar y su
                  compromiso con la calidad y la sostenibilidad.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center gap-2 mb-4">
                  <Tag className="h-4 w-4 text-gray-500" />
                  <span className="text-xs text-gray-500">Comunidad, Agricultura</span>
                </div>
                <div className="flex items-center">
                  <div className="w-8 h-8 rounded-full overflow-hidden relative mr-2">
                    <Image src="/images/author-juan.jpg" alt="Juan Pérez" fill className="object-cover" />
                  </div>
                  <span className="text-sm">Juan Pérez</span>
                </div>
              </CardContent>
              <CardFooter>
                <Button
                  asChild
                  variant="outline"
                  className="w-full border-telnar-orange/20 hover:bg-telnar-orange/10 hover:text-telnar-orange"
                >
                  <Link href="/blog/entrevista-productores-aliados">Leer más</Link>
                </Button>
              </CardFooter>
            </Card>
          </div>
        </div>
      </section>

      {/* Topics */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Temas que te Pueden Interesar</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Link href="/blog?categoria=sostenibilidad" className="group">
              <div className="relative h-64 rounded-lg overflow-hidden">
                <Image
                  src="/images/topic-sostenibilidad.jpg"
                  alt="Sostenibilidad"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                <div className="absolute bottom-0 left-0 p-6">
                  <h3 className="text-xl font-bold text-white mb-2">Sostenibilidad</h3>
                  <p className="text-white/80 text-sm">
                    Prácticas agrícolas sostenibles y su impacto en el medio ambiente.
                  </p>
                </div>
              </div>
            </Link>

            <Link href="/blog?categoria=innovacion" className="group">
              <div className="relative h-64 rounded-lg overflow-hidden">
                <Image
                  src="/images/topic-innovacion.jpg"
                  alt="Innovación"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                <div className="absolute bottom-0 left-0 p-6">
                  <h3 className="text-xl font-bold text-white mb-2">Innovación</h3>
                  <p className="text-white/80 text-sm">
                    Nuevas tecnologías y procesos que están transformando la agricultura.
                  </p>
                </div>
              </div>
            </Link>

            <Link href="/blog?categoria=nutricion" className="group">
              <div className="relative h-64 rounded-lg overflow-hidden">
                <Image
                  src="/images/topic-nutricion.jpg"
                  alt="Nutrición"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                <div className="absolute bottom-0 left-0 p-6">
                  <h3 className="text-xl font-bold text-white mb-2">Nutrición</h3>
                  <p className="text-white/80 text-sm">
                    Propiedades nutricionales de los alimentos y consejos para una alimentación saludable.
                  </p>
                </div>
              </div>
            </Link>

            <Link href="/blog?categoria=recetas" className="group">
              <div className="relative h-64 rounded-lg overflow-hidden">
                <Image
                  src="/images/topic-recetas.jpg"
                  alt="Recetas"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                <div className="absolute bottom-0 left-0 p-6">
                  <h3 className="text-xl font-bold text-white mb-2">Recetas</h3>
                  <p className="text-white/80 text-sm">
                    Deliciosas recetas para aprovechar al máximo nuestros productos frescos y congelados.
                  </p>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-16 bg-telnar-dark text-telnar-cream">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Suscríbase a Nuestro Newsletter</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Reciba en su correo electrónico los últimos artículos, consejos y noticias sobre agricultura sostenible y
            alimentación saludable.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <Input
              type="email"
              placeholder="Su correo electrónico"
              className="bg-white/10 border-white/20 text-white placeholder:text-white/50"
            />
            <Button className="bg-telnar-orange hover:bg-telnar-orange/90 text-white">Suscribirse</Button>
          </div>
        </div>
      </section>
    </div>
  )
}

