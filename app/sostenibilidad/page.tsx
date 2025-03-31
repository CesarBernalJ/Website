import Image from "next/image"
import Link from "next/link"
import { Leaf, Droplet, Recycle, Users, Award, ArrowRight, CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function SostenibilidadPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative w-full h-[300px] md:h-[400px] overflow-hidden">
        <div className="absolute inset-0 bg-black/40 z-10" />
        <Image src="/images/sostenibilidad-hero.jpg" alt="Sostenibilidad en Telnar" fill className="object-cover" />
        <div className="relative z-20 container mx-auto px-4 h-full flex flex-col justify-center items-start">
          <h1 className="text-3xl md:text-5xl font-bold text-white mb-4">Sostenibilidad</h1>
          <p className="text-lg md:text-xl text-white max-w-2xl">
            Cultivando futuro, cosechando responsabilidad: nuestro compromiso con el medio ambiente y la sociedad.
          </p>
        </div>
      </section>

      {/* Prácticas Ecoamigables */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Prácticas Ecoamigables</h2>
            <p className="text-lg text-gray-700">
              En Agrícolas Telnar S.A.S. implementamos prácticas sostenibles en cada etapa de nuestra cadena de
              producción, minimizando nuestro impacto ambiental y maximizando el aprovechamiento de recursos.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <Card className="border-green-100 shadow-md">
              <CardHeader className="text-center pb-2">
                <Recycle className="w-12 h-12 mx-auto text-telnar-orange mb-2" />
                <CardTitle>Gestión de Residuos</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700">
                  Aprovechamos el 100% de nuestros residuos orgánicos mediante un sistema de compostaje que genera abono
                  de alta calidad para nuestros cultivos, cerrando el ciclo de producción de manera sostenible.
                </p>
                <ul className="mt-4 space-y-2">
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-telnar-orange mr-2 shrink-0" />
                    <span>Compostaje de residuos vegetales</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-telnar-orange mr-2 shrink-0" />
                    <span>Envases biodegradables</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-telnar-orange mr-2 shrink-0" />
                    <span>Reciclaje de materiales</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-green-100 shadow-md">
              <CardHeader className="text-center pb-2">
                <Droplet className="w-12 h-12 mx-auto text-telnar-orange mb-2" />
                <CardTitle>Gestión del Agua</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700">
                  Implementamos sistemas de recolección de agua lluvia y tecnología de medición de pH que nos permite
                  optimizar el uso del agua en nuestros procesos, reduciendo significativamente nuestro consumo.
                </p>
                <ul className="mt-4 space-y-2">
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-telnar-orange mr-2 shrink-0" />
                    <span>Recolección de agua lluvia</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-telnar-orange mr-2 shrink-0" />
                    <span>Medición de pH para optimización</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-telnar-orange mr-2 shrink-0" />
                    <span>Reutilización en procesos secundarios</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-green-100 shadow-md">
              <CardHeader className="text-center pb-2">
                <Leaf className="w-12 h-12 mx-auto text-telnar-orange mb-2" />
                <CardTitle>Cultivo Sostenible</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700">
                  Promovemos prácticas de agricultura sostenible que respetan los ciclos naturales, reducen el uso de
                  agroquímicos y preservan la biodiversidad en nuestras áreas de cultivo.
                </p>
                <ul className="mt-4 space-y-2">
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-telnar-orange mr-2 shrink-0" />
                    <span>Rotación de cultivos</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-telnar-orange mr-2 shrink-0" />
                    <span>Control biológico de plagas</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-telnar-orange mr-2 shrink-0" />
                    <span>Reducción de agroquímicos</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="relative h-[400px] rounded-lg overflow-hidden shadow-lg">
              <Image
                src="/images/sostenibilidad-compostaje.jpg"
                alt="Sistema de compostaje de Telnar"
                fill
                className="object-cover"
              />
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-4">Economía Circular</h3>
              <p className="text-gray-700 mb-6">
                Hemos implementado un modelo de economía circular que nos permite aprovechar al máximo todos los
                recursos y minimizar los desperdicios. Nuestro sistema de compostaje convierte los residuos orgánicos en
                abono de alta calidad que utilizamos en nuestros cultivos, cerrando el ciclo de producción de manera
                sostenible.
              </p>
              <div className="bg-gray-50 p-6 rounded-lg border border-gray-100">
                <h4 className="font-semibold mb-2 flex items-center">
                  <Recycle className="w-5 h-5 text-telnar-orange mr-2" />
                  Impacto Ambiental
                </h4>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-telnar-orange mr-2 mt-0.5 shrink-0" />
                    <span>Reducción del 95% en residuos enviados a vertederos</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-telnar-orange mr-2 mt-0.5 shrink-0" />
                    <span>Disminución del 40% en el uso de fertilizantes químicos</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-telnar-orange mr-2 mt-0.5 shrink-0" />
                    <span>Producción de 20 toneladas anuales de compost orgánico</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Certificaciones */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Certificaciones</h2>
            <p className="text-lg text-gray-700">
              Nuestro compromiso con la sostenibilidad está respaldado por certificaciones reconocidas que garantizan el
              cumplimiento de los más altos estándares ambientales y sociales.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 text-center">
              <Award className="w-16 h-16 mx-auto text-telnar-orange mb-4" />
              <h3 className="text-xl font-semibold mb-2">Buenas Prácticas Agrícolas (BPA)</h3>
              <p className="text-gray-700">
                Certificación que garantiza la implementación de prácticas agrícolas sostenibles que respetan el medio
                ambiente y promueven la seguridad alimentaria.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 text-center">
              <Award className="w-16 h-16 mx-auto text-telnar-orange mb-4" />
              <h3 className="text-xl font-semibold mb-2">ISO 14001</h3>
              <p className="text-gray-700">
                Estándar internacional que certifica nuestro sistema de gestión ambiental y nuestro compromiso con la
                mejora continua en este ámbito.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 text-center">
              <Award className="w-16 h-16 mx-auto text-telnar-orange mb-4" />
              <h3 className="text-xl font-semibold mb-2">Rainforest Alliance</h3>
              <p className="text-gray-700">
                Certificación que reconoce nuestro compromiso con la conservación de la biodiversidad y los medios de
                vida sostenibles de las comunidades rurales.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Impacto Social */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Impacto Social</h2>
            <p className="text-lg text-gray-700">
              Nuestro compromiso con la sostenibilidad va más allá del medio ambiente. Trabajamos activamente para
              generar un impacto positivo en las comunidades donde operamos.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h3 className="text-2xl font-bold mb-4">Alianzas con Agricultores Locales</h3>
              <p className="text-gray-700 mb-6">
                Trabajamos en estrecha colaboración con más de 50 familias agricultoras en diferentes regiones de
                Colombia, estableciendo relaciones a largo plazo basadas en la confianza y el beneficio mutuo.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <Users className="h-6 w-6 text-telnar-orange mr-3 mt-0.5 shrink-0" />
                  <div>
                    <h4 className="font-semibold">Precios Justos</h4>
                    <p className="text-gray-700">
                      Pagamos precios justos que reconocen la calidad y el esfuerzo de nuestros productores aliados,
                      contribuyendo a mejorar su calidad de vida.
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <Users className="h-6 w-6 text-telnar-orange mr-3 mt-0.5 shrink-0" />
                  <div>
                    <h4 className="font-semibold">Contratos a Largo Plazo</h4>
                    <p className="text-gray-700">
                      Ofrecemos estabilidad a través de contratos a largo plazo que permiten a los agricultores
                      planificar e invertir en sus fincas con confianza.
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <Users className="h-6 w-6 text-telnar-orange mr-3 mt-0.5 shrink-0" />
                  <div>
                    <h4 className="font-semibold">Transferencia de Conocimiento</h4>
                    <p className="text-gray-700">
                      Compartimos técnicas y conocimientos para mejorar la productividad y sostenibilidad de sus
                      cultivos.
                    </p>
                  </div>
                </li>
              </ul>
            </div>
            <div className="relative h-[400px] rounded-lg overflow-hidden shadow-lg">
              <Image
                src="/images/impacto-agricultores.jpg"
                alt="Alianzas con agricultores locales"
                fill
                className="object-cover"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center md:flex-row-reverse">
            <div className="relative h-[400px] rounded-lg overflow-hidden shadow-lg md:order-2">
              <Image
                src="/images/impacto-capacitacion.jpg"
                alt="Programas de capacitación"
                fill
                className="object-cover"
              />
            </div>
            <div className="md:order-1">
              <h3 className="text-2xl font-bold mb-4">Programas de Capacitación</h3>
              <p className="text-gray-700 mb-6">
                Desarrollamos programas de capacitación para las comunidades rurales donde operamos, enfocados en
                técnicas agrícolas sostenibles, gestión empresarial y desarrollo personal, contribuyendo al
                fortalecimiento del tejido social y económico local.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <Users className="h-6 w-6 text-telnar-orange mr-3 mt-0.5 shrink-0" />
                  <div>
                    <h4 className="font-semibold">Escuela de Campo</h4>
                    <p className="text-gray-700">
                      Talleres prácticos sobre técnicas de cultivo sostenible, manejo de plagas y conservación de
                      suelos.
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <Users className="h-6 w-6 text-telnar-orange mr-3 mt-0.5 shrink-0" />
                  <div>
                    <h4 className="font-semibold">Formación Empresarial</h4>
                    <p className="text-gray-700">
                      Capacitación en gestión financiera, comercialización y desarrollo de negocios agrícolas.
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <Users className="h-6 w-6 text-telnar-orange mr-3 mt-0.5 shrink-0" />
                  <div>
                    <h4 className="font-semibold">Programa de Becas</h4>
                    <p className="text-gray-700">
                      Apoyo educativo para los hijos de nuestros colaboradores y agricultores aliados.
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Cadena de Valor Sostenible */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Cadena de Valor Sostenible</h2>
            <p className="text-lg text-gray-700">
              Nuestra cadena de valor está diseñada para maximizar la eficiencia y minimizar el impacto ambiental en
              cada etapa del proceso.
            </p>
          </div>

          <div className="relative">
            <div className="hidden md:block absolute top-1/2 left-0 right-0 h-1 bg-telnar-green/20 -translate-y-1/2 z-0"></div>
            <div className="grid grid-cols-1 md:grid-cols-5 gap-8 relative z-10">
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 rounded-full bg-telnar-orange text-white flex items-center justify-center text-xl font-bold mb-4">
                  1
                </div>
                <h3 className="text-xl font-semibold mb-2">Cultivo Sostenible</h3>
                <p className="text-gray-700">
                  Prácticas agrícolas que respetan el medio ambiente y conservan los recursos naturales.
                </p>
                <div className="mt-4">
                  <Leaf className="w-8 h-8 text-telnar-orange mx-auto" />
                </div>
              </div>

              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 rounded-full bg-telnar-orange text-white flex items-center justify-center text-xl font-bold mb-4">
                  2
                </div>
                <h3 className="text-xl font-semibold mb-2">Cosecha Responsable</h3>
                <p className="text-gray-700">
                  Técnicas de recolección que garantizan la calidad y minimizan el desperdicio.
                </p>
                <div className="mt-4">
                  <Leaf className="w-8 h-8 text-telnar-orange mx-auto" />
                </div>
              </div>

              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 rounded-full bg-telnar-orange text-white flex items-center justify-center text-xl font-bold mb-4">
                  3
                </div>
                <h3 className="text-xl font-semibold mb-2">Procesamiento Eficiente</h3>
                <p className="text-gray-700">
                  Tecnología que optimiza el uso de recursos y reduce el consumo energético.
                </p>
                <div className="mt-4">
                  <Recycle className="w-8 h-8 text-telnar-orange mx-auto" />
                </div>
              </div>

              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 rounded-full bg-telnar-orange text-white flex items-center justify-center text-xl font-bold mb-4">
                  4
                </div>
                <h3 className="text-xl font-semibold mb-2">Empaque Ecoamigable</h3>
                <p className="text-gray-700">Materiales biodegradables y diseños que minimizan el impacto ambiental.</p>
                <div className="mt-4">
                  <Recycle className="w-8 h-8 text-telnar-orange mx-auto" />
                </div>
              </div>

              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 rounded-full bg-telnar-orange text-white flex items-center justify-center text-xl font-bold mb-4">
                  5
                </div>
                <h3 className="text-xl font-semibold mb-2">Distribución Optimizada</h3>
                <p className="text-gray-700">
                  Rutas eficientes y vehículos de bajo impacto para reducir la huella de carbono.
                </p>
                <div className="mt-4">
                  <Droplet className="w-8 h-8 text-telnar-orange mx-auto" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-telnar-dark text-telnar-cream">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Únase a nuestro compromiso con la sostenibilidad</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Al elegir los productos de Agrícolas Telnar S.A.S., está contribuyendo a un futuro más sostenible para
            todos. Descubra cómo podemos trabajar juntos para hacer la diferencia.
          </p>
          <Button asChild size="lg" className="bg-telnar-orange text-white hover:bg-telnar-orange/90">
            <Link href="/contacto" className="flex items-center">
              <ArrowRight className="mr-2 h-5 w-5" />
              Contáctenos Hoy
            </Link>
          </Button>
        </div>
      </section>
    </div>
  )
}

