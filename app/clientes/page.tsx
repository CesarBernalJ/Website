import Image from "next/image"
import Link from "next/link"
import { Star, Quote, Users, ArrowRight, CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function ClientesPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative w-full h-[300px] md:h-[400px] overflow-hidden">
        <div className="absolute inset-0 bg-black/40 z-10" />
        <Image src="/images/clientes-hero.jpg" alt="Clientes de Telnar" fill className="object-cover" />
        <div className="relative z-20 container mx-auto px-4 h-full flex flex-col justify-center items-start">
          <h1 className="text-3xl md:text-5xl font-bold text-white mb-4">Nuestros Clientes</h1>
          <p className="text-lg md:text-xl text-white max-w-2xl">
            Empresas líderes confían en la calidad y el compromiso de Agrícolas Telnar S.A.S.
          </p>
        </div>
      </section>

      {/* Testimonios Destacados */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Testimonios Destacados</h2>
            <p className="text-lg text-gray-700">
              Nuestros clientes son nuestra mejor carta de presentación. Descubra por qué empresas líderes confían en
              Agrícolas Telnar S.A.S. para sus necesidades de productos agrícolas.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="border-green-100 shadow-md">
              <CardHeader className="text-center pb-2">
                <div className="w-24 h-24 mx-auto relative mb-4">
                  <Image src="/images/client-buffalo.png" alt="Buffalo Wings" fill className="object-contain" />
                </div>
                <CardTitle className="text-xl">Buffalo Wings</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <Quote className="w-8 h-8 mx-auto text-telnar-orange/30 mb-2" />
                <p className="text-gray-700 italic">
                  "La calidad y frescura de los vegetales de Telnar ha sido fundamental para mantener el estándar de
                  nuestras ensaladas. Su sistema de entrega puntual nos permite optimizar nuestro inventario."
                </p>
                <div className="flex justify-center mt-4">
                  <Star className="w-5 h-5 fill-telnar-orange text-telnar-orange" />
                  <Star className="w-5 h-5 fill-telnar-orange text-telnar-orange" />
                  <Star className="w-5 h-5 fill-telnar-orange text-telnar-orange" />
                  <Star className="w-5 h-5 fill-telnar-orange text-telnar-orange" />
                  <Star className="w-5 h-5 fill-telnar-orange text-telnar-orange" />
                </div>
              </CardContent>
              <CardFooter className="text-center text-sm text-gray-500">Carlos Ramírez - Gerente de Compras</CardFooter>
            </Card>

            <Card className="border-green-100 shadow-md">
              <CardHeader className="text-center pb-2">
                <div className="w-24 h-24 mx-auto relative mb-4">
                  <Image src="/images/client-qbano.png" alt="Sándwich Qbano" fill className="object-contain" />
                </div>
                <CardTitle className="text-xl">Sándwich Qbano</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <Quote className="w-8 h-8 mx-auto text-telnar-orange/30 mb-2" />
                <p className="text-gray-700 italic">
                  "Trabajar con Telnar nos ha permitido garantizar la consistencia en la calidad de nuestros
                  ingredientes. Su innovación en productos congelados nos asegura disponibilidad durante todo el año."
                </p>
                <div className="flex justify-center mt-4">
                  <Star className="w-5 h-5 fill-telnar-orange text-telnar-orange" />
                  <Star className="w-5 h-5 fill-telnar-orange text-telnar-orange" />
                  <Star className="w-5 h-5 fill-telnar-orange text-telnar-orange" />
                  <Star className="w-5 h-5 fill-telnar-orange text-telnar-orange" />
                  <Star className="w-5 h-5 fill-telnar-orange text-telnar-orange" />
                </div>
              </CardContent>
              <CardFooter className="text-center text-sm text-gray-500">
                Laura Gómez - Directora de Operaciones
              </CardFooter>
            </Card>

            <Card className="border-green-100 shadow-md">
              <CardHeader className="text-center pb-2">
                <div className="w-24 h-24 mx-auto relative mb-4">
                  <Image src="/images/client-sipote.png" alt="Sipote Burrito" fill className="object-contain" />
                </div>
                <CardTitle className="text-xl">Sipote Burrito</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <Quote className="w-8 h-8 mx-auto text-telnar-orange/30 mb-2" />
                <p className="text-gray-700 italic">
                  "La trazabilidad que ofrece Telnar nos da la tranquilidad que necesitamos para nuestros clientes. Sus
                  productos frescos son parte fundamental del sabor auténtico de nuestros burritos."
                </p>
                <div className="flex justify-center mt-4">
                  <Star className="w-5 h-5 fill-telnar-orange text-telnar-orange" />
                  <Star className="w-5 h-5 fill-telnar-orange text-telnar-orange" />
                  <Star className="w-5 h-5 fill-telnar-orange text-telnar-orange" />
                  <Star className="w-5 h-5 fill-telnar-orange text-telnar-orange" />
                  <Star className="w-5 h-5 fill-telnar-orange/30 text-telnar-orange/30" />
                </div>
              </CardContent>
              <CardFooter className="text-center text-sm text-gray-500">Andrés Martínez - Chef Ejecutivo</CardFooter>
            </Card>
          </div>
        </div>
      </section>

      {/* Casos de Éxito */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Casos de Éxito</h2>
            <p className="text-lg text-gray-700">
              Descubra cómo hemos optimizado procesos y mejorado la calidad de los productos para nuestros clientes más
              destacados.
            </p>
          </div>

          <Tabs defaultValue="caso1" className="w-full">
            <TabsList className="grid w-full grid-cols-3 mb-8">
              <TabsTrigger value="caso1">Buffalo Wings</TabsTrigger>
              <TabsTrigger value="caso2">Sándwich Qbano</TabsTrigger>
              <TabsTrigger value="caso3">Dos del Alma</TabsTrigger>
            </TabsList>

            <TabsContent value="caso1">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <div className="relative h-[300px] rounded-lg overflow-hidden shadow-lg">
                  <Image
                    src="/images/caso-buffalo.jpg"
                    alt="Caso de éxito Buffalo Wings"
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-4">Optimización de Vegetales Precortados</h3>
                  <p className="text-gray-700 mb-4">
                    Buffalo Wings necesitaba optimizar su proceso de preparación de ensaladas para reducir el tiempo de
                    servicio en horas pico. Desarrollamos un sistema de entrega de vegetales precortados y listos para
                    usar, con medidas exactas para sus diferentes tamaños de porciones.
                  </p>
                  <ul className="space-y-2 mb-6">
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-telnar-orange mr-2 mt-0.5 shrink-0" />
                      <span>Reducción del 40% en tiempo de preparación</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-telnar-orange mr-2 mt-0.5 shrink-0" />
                      <span>Disminución del 25% en desperdicio de alimentos</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-telnar-orange mr-2 mt-0.5 shrink-0" />
                      <span>Estandarización de la calidad en todas sus sucursales</span>
                    </li>
                  </ul>
                  <Button asChild className="bg-telnar-orange hover:bg-telnar-orange/90 text-white">
                    <Link href="/contacto">Solicitar Solución Similar</Link>
                  </Button>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="caso2">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <div className="relative h-[300px] rounded-lg overflow-hidden shadow-lg">
                  <Image
                    src="/images/caso-qbano.jpg"
                    alt="Caso de éxito Sándwich Qbano"
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-4">Sistema de Abastecimiento Continuo</h3>
                  <p className="text-gray-700 mb-4">
                    Sándwich Qbano enfrentaba desafíos con la disponibilidad estacional de ciertos ingredientes clave.
                    Implementamos un sistema mixto de productos frescos y congelados que garantiza el abastecimiento
                    continuo durante todo el año, manteniendo el sabor y la calidad.
                  </p>
                  <ul className="space-y-2 mb-6">
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-telnar-orange mr-2 mt-0.5 shrink-0" />
                      <span>Disponibilidad garantizada de ingredientes todo el año</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-telnar-orange mr-2 mt-0.5 shrink-0" />
                      <span>Estabilización de costos frente a fluctuaciones estacionales</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-telnar-orange mr-2 mt-0.5 shrink-0" />
                      <span>Reducción del 30% en pérdidas por deterioro</span>
                    </li>
                  </ul>
                  <Button asChild className="bg-telnar-orange hover:bg-telnar-orange/90 text-white">
                    <Link href="/contacto">Solicitar Solución Similar</Link>
                  </Button>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="caso3">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <div className="relative h-[300px] rounded-lg overflow-hidden shadow-lg">
                  <Image
                    src="/images/caso-dosdelama.jpg"
                    alt="Caso de éxito Dos del Alma"
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-4">Productos Orgánicos Certificados</h3>
                  <p className="text-gray-700 mb-4">
                    Dos del Alma buscaba diferenciarse con una línea de platos elaborados con ingredientes orgánicos.
                    Desarrollamos un programa de cultivo orgánico certificado para abastecer sus necesidades
                    específicas, con trazabilidad completa desde la semilla hasta el plato.
                  </p>
                  <ul className="space-y-2 mb-6">
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-telnar-orange mr-2 mt-0.5 shrink-0" />
                      <span>Certificación orgánica para toda la cadena de suministro</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-telnar-orange mr-2 mt-0.5 shrink-0" />
                      <span>Aumento del 35% en satisfacción de clientes</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-telnar-orange mr-2 mt-0.5 shrink-0" />
                      <span>Creación de valor agregado para su propuesta gastronómica</span>
                    </li>
                  </ul>
                  <Button asChild className="bg-telnar-orange hover:bg-telnar-orange/90 text-white">
                    <Link href="/contacto">Solicitar Solución Similar</Link>
                  </Button>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Alianzas Estratégicas */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Alianzas Estratégicas</h2>
            <p className="text-lg text-gray-700">
              Nuestras alianzas con productores locales y proveedores estratégicos nos permiten ofrecer productos de la
              más alta calidad y fortalecer toda la cadena de suministro.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-12">
            <div className="relative h-[400px] rounded-lg overflow-hidden shadow-lg">
              <Image
                src="/images/alianzas-productores.jpg"
                alt="Alianzas con productores locales"
                fill
                className="object-cover"
              />
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-4">Productores Locales</h3>
              <p className="text-gray-700 mb-6">
                Trabajamos con más de 50 familias agricultoras en diferentes regiones de Colombia, estableciendo
                relaciones a largo plazo basadas en la confianza y el beneficio mutuo. Nuestro programa de desarrollo de
                proveedores incluye:
              </p>
              <ul className="space-y-4 mb-6">
                <li className="flex items-start">
                  <Users className="h-6 w-6 text-telnar-orange mr-3 mt-0.5 shrink-0" />
                  <div>
                    <h4 className="font-semibold">Capacitación Técnica</h4>
                    <p className="text-gray-700">
                      Transferencia de conocimientos en técnicas de cultivo sostenible y manejo post-cosecha.
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <Users className="h-6 w-6 text-telnar-orange mr-3 mt-0.5 shrink-0" />
                  <div>
                    <h4 className="font-semibold">Precios Justos</h4>
                    <p className="text-gray-700">
                      Política de precios que reconoce la calidad y el esfuerzo de nuestros productores aliados.
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <Users className="h-6 w-6 text-telnar-orange mr-3 mt-0.5 shrink-0" />
                  <div>
                    <h4 className="font-semibold">Planificación Conjunta</h4>
                    <p className="text-gray-700">
                      Programación de siembras y cosechas para garantizar volumen y continuidad en el suministro.
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center md:flex-row-reverse">
            <div className="relative h-[400px] rounded-lg overflow-hidden shadow-lg md:order-2">
              <Image src="/images/alianzas-tecnologia.jpg" alt="Alianzas tecnológicas" fill className="object-cover" />
            </div>
            <div className="md:order-1">
              <h3 className="text-2xl font-bold mb-4">Alianzas Tecnológicas</h3>
              <p className="text-gray-700 mb-6">
                Colaboramos con proveedores de tecnología agrícola de vanguardia para optimizar nuestros procesos y
                garantizar la máxima calidad en cada etapa de la cadena de valor.
              </p>
              <ul className="space-y-4 mb-6">
                <li className="flex items-start">
                  <Users className="h-6 w-6 text-telnar-orange mr-3 mt-0.5 shrink-0" />
                  <div>
                    <h4 className="font-semibold">Equipamiento Alemán</h4>
                    <p className="text-gray-700">
                      Maquinaria de última generación para procesamiento y conservación de alimentos.
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <Users className="h-6 w-6 text-telnar-orange mr-3 mt-0.5 shrink-0" />
                  <div>
                    <h4 className="font-semibold">Sistemas de Trazabilidad</h4>
                    <p className="text-gray-700">
                      Software especializado para seguimiento completo desde el campo hasta el cliente.
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <Users className="h-6 w-6 text-telnar-orange mr-3 mt-0.5 shrink-0" />
                  <div>
                    <h4 className="font-semibold">Laboratorios de Calidad</h4>
                    <p className="text-gray-700">
                      Alianzas con laboratorios certificados para análisis y control de calidad permanente.
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-telnar-dark text-telnar-cream">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">¿Listo para ser nuestro próximo caso de éxito?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Solicite una cotización personalizada y descubra cómo podemos optimizar su cadena de suministro con
            productos agrícolas de la más alta calidad.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              size="lg"
              className="bg-telnar-orange text-white hover:bg-telnar-orange/90 sm:min-w-[200px]"
            >
              <Link href="/contacto">Solicitar Cotización</Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white/10 sm:min-w-[200px]"
            >
              <Link href="/productos">
                Ver Catálogo
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}

