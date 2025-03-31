import Image from "next/image"
import Link from "next/link"
import { Check, Shield, BarChart } from "lucide-react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function ProductsPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative w-full h-[300px] md:h-[400px] overflow-hidden">
        <div className="absolute inset-0 bg-black/40 z-10" />
        <Image src="/images/products-hero.jpg" alt="Productos agrícolas de Telnar" fill className="object-cover" />
        <div className="relative z-20 container mx-auto px-4 h-full flex flex-col justify-center items-start">
          <h1 className="text-3xl md:text-5xl font-bold text-white mb-4">Nuestros Productos</h1>
          <p className="text-lg md:text-xl text-white max-w-2xl">
            Descubra nuestra amplia gama de productos agrícolas frescos y procesados de la más alta calidad.
          </p>
        </div>
      </section>

      {/* Products Tabs */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <Tabs defaultValue="frescos" className="w-full">
            <TabsList className="grid w-full grid-cols-2 mb-8">
              <TabsTrigger value="frescos">Productos Frescos</TabsTrigger>
              <TabsTrigger value="procesados">Productos Procesados</TabsTrigger>
            </TabsList>

            <TabsContent value="frescos" id="frescos">
              <div className="mb-8">
                <div className="relative h-[300px] rounded-lg overflow-hidden shadow-lg mb-8">
                  <Image src="/images/nuestros-productos.png" alt="Productos frescos" fill className="object-cover" />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <Card className="overflow-hidden">
                  <div className="relative h-64">
                    <Image src="/images/vegetales-frescos.png" alt="Vegetales frescos" fill className="object-cover" />
                  </div>
                  <CardHeader>
                    <CardTitle>Vegetales Frescos</CardTitle>
                    <CardDescription>
                      Selección de vegetales cultivados con los más altos estándares de calidad
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      <li className="flex items-center">
                        <Check className="h-5 w-5 text-telnar-orange mr-2" />
                        <span>Control visual por canastas de colores</span>
                      </li>
                      <li className="flex items-center">
                        <Check className="h-5 w-5 text-telnar-orange mr-2" />
                        <span>Trazabilidad completa</span>
                      </li>
                      <li className="flex items-center">
                        <Check className="h-5 w-5 text-telnar-orange mr-2" />
                        <span>Entrega puntual garantizada</span>
                      </li>
                    </ul>
                  </CardContent>
                  <CardFooter>
                    <Button
                      asChild
                      variant="outline"
                      className="w-full border-telnar-orange/20 hover:bg-telnar-orange/10 hover:text-telnar-orange"
                    >
                      <Link href="/contacto">Solicitar Información</Link>
                    </Button>
                  </CardFooter>
                </Card>

                <Card className="overflow-hidden">
                  <div className="relative h-64">
                    <Image src="/images/frutas-frescas.png" alt="Frutas frescas" fill className="object-cover" />
                  </div>
                  <CardHeader>
                    <CardTitle>Frutas Frescas</CardTitle>
                    <CardDescription>Frutas seleccionadas en su punto óptimo de maduración</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      <li className="flex items-center">
                        <Check className="h-5 w-5 text-telnar-orange mr-2" />
                        <span>Selección manual cuidadosa</span>
                      </li>
                      <li className="flex items-center">
                        <Check className="h-5 w-5 text-telnar-orange mr-2" />
                        <span>Control de calidad riguroso</span>
                      </li>
                      <li className="flex items-center">
                        <Check className="h-5 w-5 text-telnar-orange mr-2" />
                        <span>Sabor y frescura garantizados</span>
                      </li>
                    </ul>
                  </CardContent>
                  <CardFooter>
                    <Button
                      asChild
                      variant="outline"
                      className="w-full border-telnar-orange/20 hover:bg-telnar-orange/10 hover:text-telnar-orange"
                    >
                      <Link href="/contacto">Solicitar Información</Link>
                    </Button>
                  </CardFooter>
                </Card>

                <Card className="overflow-hidden">
                  <div className="relative h-64">
                    <Image src="/images/hierbas-frescas.png" alt="Hierbas frescas" fill className="object-cover" />
                  </div>
                  <CardHeader>
                    <CardTitle>Hierbas Aromáticas</CardTitle>
                    <CardDescription>Hierbas aromáticas frescas para realzar el sabor de sus platos</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      <li className="flex items-center">
                        <Check className="h-5 w-5 text-telnar-orange mr-2" />
                        <span>Cultivo controlado</span>
                      </li>
                      <li className="flex items-center">
                        <Check className="h-5 w-5 text-telnar-orange mr-2" />
                        <span>Aroma y sabor intensos</span>
                      </li>
                      <li className="flex items-center">
                        <Check className="h-5 w-5 text-telnar-orange mr-2" />
                        <span>Empaque que preserva la frescura</span>
                      </li>
                    </ul>
                  </CardContent>
                  <CardFooter>
                    <Button
                      asChild
                      variant="outline"
                      className="w-full border-telnar-orange/20 hover:bg-telnar-orange/10 hover:text-telnar-orange"
                    >
                      <Link href="/contacto">Solicitar Información</Link>
                    </Button>
                  </CardFooter>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="procesados" id="procesados">
              <div className="mb-8">
                <div className="relative h-[300px] rounded-lg overflow-hidden shadow-lg mb-8">
                  <Image
                    src="/images/processed-products.jpg"
                    alt="Productos procesados"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <Card className="overflow-hidden">
                  <div className="relative h-64">
                    <Image src="/images/frozen-mango.jpg" alt="Mango congelado" fill className="object-cover" />
                  </div>
                  <CardHeader>
                    <CardTitle>Mango Congelado</CardTitle>
                    <CardDescription>
                      Mango congelado disponible todo el año con la misma calidad y frescura
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      <li className="flex items-center">
                        <Check className="h-5 w-5 text-telnar-orange mr-2" />
                        <span>Proceso de congelación rápida</span>
                      </li>
                      <li className="flex items-center">
                        <Check className="h-5 w-5 text-telnar-orange mr-2" />
                        <span>Conserva nutrientes y sabor</span>
                      </li>
                      <li className="flex items-center">
                        <Check className="h-5 w-5 text-telnar-orange mr-2" />
                        <span>Disponible en diferentes cortes</span>
                      </li>
                      <li className="flex items-center">
                        <Check className="h-5 w-5 text-telnar-orange mr-2" />
                        <span>Ideal para smoothies y postres</span>
                      </li>
                    </ul>
                  </CardContent>
                  <CardFooter>
                    <Button
                      asChild
                      variant="outline"
                      className="w-full border-telnar-orange/20 hover:bg-telnar-orange/10 hover:text-telnar-orange"
                    >
                      <Link href="/contacto">Solicitar Información</Link>
                    </Button>
                  </CardFooter>
                </Card>

                <Card className="overflow-hidden">
                  <div className="relative h-64">
                    <Image src="/images/frozen-blackberry.jpg" alt="Mora congelada" fill className="object-cover" />
                  </div>
                  <CardHeader>
                    <CardTitle>Mora Congelada</CardTitle>
                    <CardDescription>
                      Mora congelada que mantiene todas sus propiedades durante todo el año
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      <li className="flex items-center">
                        <Check className="h-5 w-5 text-telnar-orange mr-2" />
                        <span>Selección de las mejores moras</span>
                      </li>
                      <li className="flex items-center">
                        <Check className="h-5 w-5 text-telnar-orange mr-2" />
                        <span>Proceso IQF para preservar calidad</span>
                      </li>
                      <li className="flex items-center">
                        <Check className="h-5 w-5 text-telnar-orange mr-2" />
                        <span>Sin aditivos ni conservantes</span>
                      </li>
                      <li className="flex items-center">
                        <Check className="h-5 w-5 text-telnar-orange mr-2" />
                        <span>Perfecta para jugos y repostería</span>
                      </li>
                    </ul>
                  </CardContent>
                  <CardFooter>
                    <Button
                      asChild
                      variant="outline"
                      className="w-full border-telnar-orange/20 hover:bg-telnar-orange/10 hover:text-telnar-orange"
                    >
                      <Link href="/contacto">Solicitar Información</Link>
                    </Button>
                  </CardFooter>
                </Card>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-16 bg-gray-50" id="certificaciones">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Certificaciones de Calidad</h2>
            <p className="text-lg text-gray-700">
              Nuestros productos cumplen con los más altos estándares de calidad e inocuidad alimentaria, respaldados
              por certificaciones reconocidas internacionalmente.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 text-center">
              <Shield className="w-16 h-16 mx-auto text-telnar-orange mb-4" />
              <h3 className="text-xl font-semibold mb-2">HACCP</h3>
              <p className="text-gray-700">
                Sistema de Análisis de Peligros y Puntos Críticos de Control que garantiza la inocuidad alimentaria.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 text-center">
              <Shield className="w-16 h-16 mx-auto text-telnar-orange mb-4" />
              <h3 className="text-xl font-semibold mb-2">ISO 22000</h3>
              <p className="text-gray-700">
                Estándar internacional que especifica los requisitos para un sistema de gestión de seguridad
                alimentaria.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 text-center">
              <Shield className="w-16 h-16 mx-auto text-telnar-orange mb-4" />
              <h3 className="text-xl font-semibold mb-2">BPA</h3>
              <p className="text-gray-700">
                Buenas Prácticas Agrícolas que aseguran la integridad de los alimentos y la sostenibilidad ambiental.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Traceability */}
      <section className="py-16 bg-white" id="trazabilidad">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Trazabilidad Completa</h2>
              <p className="text-lg text-gray-700 mb-6">
                En Agrícolas Telnar S.A.S., implementamos un riguroso sistema de trazabilidad que nos permite seguir
                cada producto desde su origen hasta su destino final, garantizando la máxima calidad y seguridad.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <BarChart className="h-6 w-6 text-telnar-orange mr-3 mt-0.5" />
                  <div>
                    <h3 className="font-semibold">Identificación de Lotes</h3>
                    <p className="text-gray-700">
                      Cada lote de producción cuenta con un código único que permite su seguimiento.
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <BarChart className="h-6 w-6 text-telnar-orange mr-3 mt-0.5" />
                  <div>
                    <h3 className="font-semibold">Control de Procesos</h3>
                    <p className="text-gray-700">Monitoreo constante de cada etapa del proceso productivo.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <BarChart className="h-6 w-6 text-telnar-orange mr-3 mt-0.5" />
                  <div>
                    <h3 className="font-semibold">Registros Detallados</h3>
                    <p className="text-gray-700">
                      Documentación completa de proveedores, fechas, condiciones y destinos.
                    </p>
                  </div>
                </li>
              </ul>
            </div>
            <div className="relative h-[400px] rounded-lg overflow-hidden shadow-lg">
              <Image
                src="/images/traceability.jpg"
                alt="Sistema de trazabilidad de Telnar"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

