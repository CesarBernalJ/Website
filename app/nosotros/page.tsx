import Image from "next/image"
import { Leaf, Star, Target, Award, Users, Clock } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative w-full h-[300px] md:h-[400px] overflow-hidden">
        <div className="absolute inset-0 bg-black/40 z-10" />
        <Image src="/images/about-hero.jpg" alt="Campos agrícolas de Telnar" fill className="object-cover" />
        <div className="relative z-20 container mx-auto px-4 h-full flex flex-col justify-center items-start">
          <h1 className="text-3xl md:text-5xl font-bold text-white mb-4">Quiénes Somos</h1>
          <p className="text-lg md:text-xl text-white max-w-2xl">
            Conoce nuestra historia, misión, visión y los valores que nos han convertido en líderes del sector agrícola.
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="border-green-100 shadow-md">
              <CardHeader className="text-center pb-2">
                <Leaf className="w-12 h-12 mx-auto text-telnar-orange mb-2" />
                <CardTitle className="text-2xl">Nuestra Misión</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-gray-700">
                  Proveer productos agrícolas frescos y procesados de la más alta calidad, garantizando la inocuidad
                  alimentaria y promoviendo prácticas sostenibles que beneficien a nuestros clientes, colaboradores y al
                  medio ambiente.
                </p>
              </CardContent>
            </Card>

            <Card className="border-green-100 shadow-md">
              <CardHeader className="text-center pb-2">
                <Star className="w-12 h-12 mx-auto text-telnar-orange mb-2" />
                <CardTitle className="text-2xl">Nuestra Visión</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-gray-700">
                  Ser reconocidos como el proveedor líder de productos agrícolas en Colombia, destacándonos por nuestra
                  innovación, calidad impecable y compromiso con la sostenibilidad, expandiendo nuestra presencia a
                  nivel nacional e internacional.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Quality Objectives */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Objetivos de Calidad</h2>
            <p className="text-lg text-gray-700">
              Nuestro compromiso con la excelencia se refleja en cada uno de nuestros objetivos de calidad, que guían
              todas nuestras operaciones y decisiones.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow group">
              <Target className="w-10 h-10 text-telnar-orange mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="text-xl font-semibold mb-2">Inocuidad Alimentaria</h3>
              <p className="text-gray-700">
                Garantizar que todos nuestros productos cumplan con los más altos estándares de inocuidad alimentaria.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow group">
              <Award className="w-10 h-10 text-telnar-orange mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="text-xl font-semibold mb-2">Calidad Constante</h3>
              <p className="text-gray-700">
                Mantener la consistencia en la calidad de nuestros productos a través de rigurosos controles y
                tecnología de punta.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow group">
              <Leaf className="w-10 h-10 text-telnar-orange mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="text-xl font-semibold mb-2">Sostenibilidad</h3>
              <p className="text-gray-700">
                Implementar y mejorar continuamente prácticas agrícolas sostenibles que minimicen nuestro impacto
                ambiental.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow group">
              <Users className="w-10 h-10 text-telnar-orange mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="text-xl font-semibold mb-2">Bienestar Laboral</h3>
              <p className="text-gray-700">
                Promover un ambiente de trabajo seguro y saludable, con capacitación continua y pausas activas para
                nuestro equipo.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow group">
              <Clock className="w-10 h-10 text-telnar-orange mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="text-xl font-semibold mb-2">Puntualidad</h3>
              <p className="text-gray-700">
                Cumplir con los tiempos de entrega acordados, respetando los compromisos adquiridos con nuestros
                clientes.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow group">
              <Star className="w-10 h-10 text-telnar-orange mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="text-xl font-semibold mb-2">Innovación</h3>
              <p className="text-gray-700">
                Buscar constantemente nuevas tecnologías y procesos que mejoren la calidad de nuestros productos y la
                eficiencia de nuestras operaciones.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Production Process */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Nuestro Proceso de Producción</h2>
            <p className="text-lg text-gray-700">
              Utilizamos tecnología alemana de punta y seguimos un riguroso proceso para garantizar la máxima calidad en
              cada etapa.
            </p>
          </div>

          <div className="relative">
            <div className="hidden md:block absolute top-1/2 left-0 right-0 h-1 bg-telnar-green/20 -translate-y-1/2 z-0"></div>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative z-10">
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 rounded-full bg-telnar-orange text-white flex items-center justify-center text-xl font-bold mb-4">
                  1
                </div>
                <h3 className="text-xl font-semibold mb-2">Selección</h3>
                <p className="text-gray-700">Cuidadosa selección de materias primas de la más alta calidad.</p>
              </div>

              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 rounded-full bg-telnar-orange text-white flex items-center justify-center text-xl font-bold mb-4">
                  2
                </div>
                <h3 className="text-xl font-semibold mb-2">Clasificación</h3>
                <p className="text-gray-700">Sistema de canastas de colores para control visual de calidad.</p>
              </div>

              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 rounded-full bg-telnar-orange text-white flex items-center justify-center text-xl font-bold mb-4">
                  3
                </div>
                <h3 className="text-xl font-semibold mb-2">Procesamiento</h3>
                <p className="text-gray-700">Procesamiento con maquinaria alemana de última generación.</p>
              </div>

              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 rounded-full bg-telnar-orange text-white flex items-center justify-center text-xl font-bold mb-4">
                  4
                </div>
                <h3 className="text-xl font-semibold mb-2">Control de Calidad</h3>
                <p className="text-gray-700">Riguroso control de calidad y medición de pH antes de la distribución.</p>
              </div>
            </div>
          </div>

          <div className="mt-12 text-center">
            <div className="aspect-video max-w-3xl mx-auto rounded-lg overflow-hidden shadow-lg">
              <Image
                src="/images/production-process.jpg"
                alt="Proceso de producción de Telnar"
                width={1000}
                height={562}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

