import Image from "next/image"
import Link from "next/link"
import { Lightbulb, Truck, BarChart, Zap, ArrowRight, Sparkles, Clock, Beaker } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

export default function InnovacionPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative w-full h-[300px] md:h-[400px] overflow-hidden">
        <div className="absolute inset-0 bg-black/40 z-10" />
        <Image src="/images/innovacion-hero.jpg" alt="Innovación en Telnar" fill className="object-cover" />
        <div className="relative z-20 container mx-auto px-4 h-full flex flex-col justify-center items-start">
          <h1 className="text-3xl md:text-5xl font-bold text-white mb-4">Innovación</h1>
          <p className="text-lg md:text-xl text-white max-w-2xl">
            Tecnología y procesos de vanguardia para garantizar productos agrícolas de la más alta calidad.
          </p>
        </div>
      </section>

      {/* Productos Innovadores */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Productos Innovadores</h2>
            <p className="text-lg text-gray-700">
              Nuestro compromiso con la innovación nos ha permitido desarrollar productos que mantienen su calidad y
              frescura durante todo el año, superando las limitaciones estacionales.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="overflow-hidden">
              <div className="relative h-64">
                <Image src="/images/frozen-mango.jpg" alt="Mango congelado" fill className="object-cover" />
              </div>
              <CardHeader>
                <CardTitle>Mango Ultracongelado</CardTitle>
                <CardDescription>Disponible todo el año con la misma calidad y frescura</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 mb-4">
                  Nuestro proceso de ultracongelación IQF (Individual Quick Freezing) permite congelar cada trozo de
                  mango de manera individual en menos de 10 minutos, preservando su sabor, textura y propiedades
                  nutricionales.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <Sparkles className="h-5 w-5 text-telnar-orange mr-2" />
                    <span>Conserva el 95% de sus nutrientes originales</span>
                  </li>
                  <li className="flex items-center">
                    <Sparkles className="h-5 w-5 text-telnar-orange mr-2" />
                    <span>Ideal para jugos, smoothies y postres</span>
                  </li>
                  <li className="flex items-center">
                    <Sparkles className="h-5 w-5 text-telnar-orange mr-2" />
                    <span>Sin aditivos ni conservantes</span>
                  </li>
                  <li className="flex items-center">
                    <Sparkles className="h-5 w-5 text-telnar-orange mr-2" />
                    <span>Reduce desperdicios y optimiza inventarios</span>
                  </li>
                </ul>
              </CardContent>
              <CardFooter>
                <Button
                  asChild
                  variant="outline"
                  className="w-full border-telnar-orange/20 hover:bg-telnar-orange/10 hover:text-telnar-orange"
                >
                  <Link href="/productos#procesados">Ver Detalles</Link>
                </Button>
              </CardFooter>
            </Card>

            <Card className="overflow-hidden">
              <div className="relative h-64">
                <Image src="/images/frozen-blackberry.jpg" alt="Mora congelada" fill className="object-cover" />
              </div>
              <CardHeader>
                <CardTitle>Mora Ultracongelada</CardTitle>
                <CardDescription>Practicidad y nutrición en cualquier temporada</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 mb-4">
                  Nuestra mora ultracongelada mantiene intactas sus propiedades antioxidantes y su intenso sabor gracias
                  a nuestro proceso de congelación rápida. Un producto práctico que elimina el problema de la
                  estacionalidad.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <Sparkles className="h-5 w-5 text-telnar-orange mr-2" />
                    <span>Lista para usar, sin necesidad de descongelar</span>
                  </li>
                  <li className="flex items-center">
                    <Sparkles className="h-5 w-5 text-telnar-orange mr-2" />
                    <span>Perfecta para batidos, salsas y repostería</span>
                  </li>
                  <li className="flex items-center">
                    <Sparkles className="h-5 w-5 text-telnar-orange mr-2" />
                    <span>Mayor vida útil que la mora fresca</span>
                  </li>
                  <li className="flex items-center">
                    <Sparkles className="h-5 w-5 text-telnar-orange mr-2" />
                    <span>Precio estable durante todo el año</span>
                  </li>
                </ul>
              </CardContent>
              <CardFooter>
                <Button
                  asChild
                  variant="outline"
                  className="w-full border-telnar-orange/20 hover:bg-telnar-orange/10 hover:text-telnar-orange"
                >
                  <Link href="/productos#procesados">Ver Detalles</Link>
                </Button>
              </CardFooter>
            </Card>
          </div>
        </div>
      </section>

      {/* Tecnología Aplicada */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Tecnología Aplicada</h2>
            <p className="text-lg text-gray-700">
              Implementamos tecnologías de punta en cada etapa de nuestra cadena de valor para garantizar la máxima
              calidad, trazabilidad y eficiencia en nuestros procesos.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
            <div className="relative h-[400px] rounded-lg overflow-hidden shadow-lg">
              <Image
                src="/images/tecnologia-gps.jpg"
                alt="Dispositivos GPS para monitoreo"
                fill
                className="object-cover"
              />
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-4">
                Dispositivos GPS "Chismosos" <Truck className="inline-block h-6 w-6 text-telnar-orange ml-2" />
              </h3>
              <p className="text-gray-700 mb-6">
                Nuestros vehículos de transporte están equipados con dispositivos GPS de última generación que nos
                permiten monitorear en tiempo real la ubicación, temperatura y condiciones de nuestros productos durante
                todo el trayecto.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <Zap className="h-6 w-6 text-telnar-orange mr-3 mt-0.5 shrink-0" />
                  <div>
                    <h4 className="font-semibold">Monitoreo en Tiempo Real</h4>
                    <p className="text-gray-700">
                      Seguimiento continuo de la ubicación y condiciones de transporte para garantizar la cadena de
                      frío.
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <Zap className="h-6 w-6 text-telnar-orange mr-3 mt-0.5 shrink-0" />
                  <div>
                    <h4 className="font-semibold">Alertas Automáticas</h4>
                    <p className="text-gray-700">
                      Notificaciones inmediatas ante cualquier desviación en la ruta o cambios en la temperatura.
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <Zap className="h-6 w-6 text-telnar-orange mr-3 mt-0.5 shrink-0" />
                  <div>
                    <h4 className="font-semibold">Optimización de Rutas</h4>
                    <p className="text-gray-700">
                      Análisis de datos para determinar las rutas más eficientes y reducir tiempos de entrega.
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center md:flex-row-reverse">
            <div className="relative h-[400px] rounded-lg overflow-hidden shadow-lg md:order-2">
              <Image
                src="/images/tecnologia-canastas.jpg"
                alt="Sistema de canastas de colores"
                fill
                className="object-cover"
              />
            </div>
            <div className="md:order-1">
              <h3 className="text-2xl font-bold mb-4">
                Sistema de Canastas de Colores <BarChart className="inline-block h-6 w-6 text-telnar-orange ml-2" />
              </h3>
              <p className="text-gray-700 mb-6">
                Hemos implementado un innovador sistema de control visual mediante canastas de diferentes colores que
                nos permite identificar rápidamente el tipo de producto, su fecha de ingreso y su destino, optimizando
                la gestión de inventarios y garantizando la frescura.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <Zap className="h-6 w-6 text-telnar-orange mr-3 mt-0.5 shrink-0" />
                  <div>
                    <h4 className="font-semibold">Identificación Visual Inmediata</h4>
                    <p className="text-gray-700">
                      Cada color representa un tipo de producto o cliente, facilitando la organización y el despacho.
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <Zap className="h-6 w-6 text-telnar-orange mr-3 mt-0.5 shrink-0" />
                  <div>
                    <h4 className="font-semibold">Control FIFO Eficiente</h4>
                    <p className="text-gray-700">
                      Sistema First In, First Out que garantiza la rotación adecuada de los productos.
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <Zap className="h-6 w-6 text-telnar-orange mr-3 mt-0.5 shrink-0" />
                  <div>
                    <h4 className="font-semibold">Reducción de Errores</h4>
                    <p className="text-gray-700">
                      Minimización de confusiones en la preparación de pedidos y mejora en la precisión de entregas.
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Proyectos Futuros */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Proyectos Futuros</h2>
            <p className="text-lg text-gray-700">
              En Agrícolas Telnar S.A.S. nunca dejamos de innovar. Conozca nuestros proyectos en desarrollo que pronto
              revolucionarán nuestra oferta de productos y servicios.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="border-green-100 shadow-md">
              <CardHeader className="text-center pb-2">
                <Lightbulb className="w-12 h-12 mx-auto text-telnar-orange mb-2" />
                <CardTitle>Empaque al Vacío Inteligente</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700">
                  Estamos desarrollando un sistema de empaque al vacío con indicadores de frescura que cambian de color
                  según la condición del producto, permitiendo a los clientes verificar visualmente la calidad antes de
                  su uso.
                </p>
                <div className="mt-4 flex items-center justify-center">
                  <div className="bg-telnar-orange/10 text-telnar-orange text-sm font-medium rounded-full px-3 py-1 flex items-center">
                    <Clock className="w-4 h-4 mr-1" />
                    Lanzamiento: 2024
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-green-100 shadow-md">
              <CardHeader className="text-center pb-2">
                <Lightbulb className="w-12 h-12 mx-auto text-telnar-orange mb-2" />
                <CardTitle>Kits de Cocina Listos para Consumir</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700">
                  Próximamente lanzaremos kits de ingredientes pre-cortados y porcionados para preparar recetas
                  específicas, facilitando la labor en cocinas profesionales y reduciendo el tiempo de preparación hasta
                  en un 60%.
                </p>
                <div className="mt-4 flex items-center justify-center">
                  <div className="bg-telnar-orange/10 text-telnar-orange text-sm font-medium rounded-full px-3 py-1 flex items-center">
                    <Clock className="w-4 h-4 mr-1" />
                    Lanzamiento: 2023
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-green-100 shadow-md">
              <CardHeader className="text-center pb-2">
                <Lightbulb className="w-12 h-12 mx-auto text-telnar-orange mb-2" />
                <CardTitle>Plataforma Digital de Pedidos</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700">
                  Estamos desarrollando una plataforma digital que permitirá a nuestros clientes realizar pedidos en
                  línea, consultar inventarios en tiempo real y acceder a informes detallados de consumo para optimizar
                  sus compras.
                </p>
                <div className="mt-4 flex items-center justify-center">
                  <div className="bg-telnar-orange/10 text-telnar-orange text-sm font-medium rounded-full px-3 py-1 flex items-center">
                    <Clock className="w-4 h-4 mr-1" />
                    Beta: Finales 2023
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Flujo de Producción */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Nuestro Flujo de Producción Innovador</h2>
            <p className="text-lg text-gray-700">
              Conozca el proceso tecnológico que garantiza la máxima calidad en cada uno de nuestros productos.
            </p>
          </div>

          <div className="relative">
            <div className="hidden md:block absolute top-1/2 left-0 right-0 h-1 bg-telnar-green/20 -translate-y-1/2 z-0"></div>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative z-10">
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 rounded-full bg-telnar-orange text-white flex items-center justify-center text-xl font-bold mb-4">
                  1
                </div>
                <h3 className="text-xl font-semibold mb-2">Recepción y Análisis</h3>
                <p className="text-gray-700">
                  Cada lote es sometido a un riguroso control de calidad con equipos de medición de última generación.
                </p>
                <div className="mt-4">
                  <Beaker className="w-8 h-8 text-telnar-orange mx-auto" />
                </div>
              </div>

              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 rounded-full bg-telnar-orange text-white flex items-center justify-center text-xl font-bold mb-4">
                  2
                </div>
                <h3 className="text-xl font-semibold mb-2">Procesamiento Avanzado</h3>
                <p className="text-gray-700">
                  Maquinaria alemana de última generación para corte, lavado y procesamiento con precisión milimétrica.
                </p>
                <div className="mt-4">
                  <Zap className="w-8 h-8 text-telnar-orange mx-auto" />
                </div>
              </div>

              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 rounded-full bg-telnar-orange text-white flex items-center justify-center text-xl font-bold mb-4">
                  3
                </div>
                <h3 className="text-xl font-semibold mb-2">Ultracongelación IQF</h3>
                <p className="text-gray-700">
                  Sistema de congelación individual que preserva las propiedades organolépticas y nutricionales.
                </p>
                <div className="mt-4">
                  <Sparkles className="w-8 h-8 text-telnar-orange mx-auto" />
                </div>
              </div>

              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 rounded-full bg-telnar-orange text-white flex items-center justify-center text-xl font-bold mb-4">
                  4
                </div>
                <h3 className="text-xl font-semibold mb-2">Empaque y Distribución</h3>
                <p className="text-gray-700">
                  Sistemas de empaque que garantizan la frescura y logística monitoreada por GPS en tiempo real.
                </p>
                <div className="mt-4">
                  <Truck className="w-8 h-8 text-telnar-orange mx-auto" />
                </div>
              </div>
            </div>
          </div>

          <div className="mt-12 text-center">
            <div className="aspect-video max-w-3xl mx-auto rounded-lg overflow-hidden shadow-lg">
              <Image
                src="/images/maquinaria-alemana.jpg"
                alt="Maquinaria alemana de Telnar"
                width={1000}
                height={562}
                className="w-full h-full object-cover"
              />
            </div>
            <p className="mt-4 text-sm text-gray-500">
              Nuestra planta cuenta con maquinaria alemana de última generación para garantizar la máxima calidad.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-telnar-dark text-telnar-cream">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Innovación al servicio de su negocio</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Descubra cómo nuestras soluciones innovadoras pueden optimizar sus procesos y mejorar la calidad de sus
            productos finales.
          </p>
          <Button asChild size="lg" className="bg-telnar-orange text-white hover:bg-telnar-orange/90">
            <Link href="/contacto" className="flex items-center">
              <ArrowRight className="mr-2 h-5 w-5" />
              Solicitar Demostración
            </Link>
          </Button>
        </div>
      </section>
    </div>
  )
}

