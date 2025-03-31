"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Download, FileDown, Share2, Info } from "lucide-react"

export default function DescargarPage() {
  const [isGenerating, setIsGenerating] = useState(false)
  const [isGenerated, setIsGenerated] = useState(false)

  const handleGenerate = async () => {
    setIsGenerating(true)

    // Simulamos el proceso de generación
    // En un entorno real, esto sería manejado por el servidor
    setTimeout(() => {
      setIsGenerating(false)
      setIsGenerated(true)
    }, 3000)
  }

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="bg-telnar-dark text-telnar-cream py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-3xl md:text-5xl font-bold mb-4">Descargar Sitio Web</h1>
            <p className="text-lg md:text-xl">
              Descargue una versión estática de nuestro sitio web para compartir o visualizar sin conexión a internet.
            </p>
          </div>
        </div>
      </section>

      {/* Download Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl flex items-center">
                  <Download className="mr-2 h-6 w-6 text-telnar-orange" />
                  Descargar Sitio Web Completo
                </CardTitle>
                <CardDescription>
                  Obtenga una versión estática del sitio web de Agrícolas Telnar S.A.S. que puede visualizar sin
                  conexión a internet.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                    <div className="flex items-start">
                      <Info className="h-5 w-5 text-blue-500 mr-2 mt-0.5 shrink-0" />
                      <div>
                        <h3 className="font-medium text-gray-900">Información importante</h3>
                        <p className="text-gray-700 text-sm mt-1">
                          La versión descargable contiene todos los elementos visuales y textos del sitio web, pero
                          algunas funcionalidades interactivas podrían no estar disponibles sin conexión a internet.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-telnar-orange/5 p-4 rounded-lg border border-telnar-orange/20">
                    <h3 className="font-medium text-telnar-dark mb-2">El paquete descargable incluye:</h3>
                    <ul className="space-y-2 text-gray-700">
                      <li className="flex items-center">
                        <FileDown className="h-4 w-4 text-telnar-orange mr-2" />
                        Archivos HTML de todas las páginas
                      </li>
                      <li className="flex items-center">
                        <FileDown className="h-4 w-4 text-telnar-orange mr-2" />
                        Imágenes y recursos gráficos
                      </li>
                      <li className="flex items-center">
                        <FileDown className="h-4 w-4 text-telnar-orange mr-2" />
                        Estilos CSS y scripts JavaScript
                      </li>
                    </ul>
                  </div>
                </div>
              </CardContent>
              <CardFooter className="flex flex-col space-y-4">
                {isGenerated ? (
                  <>
                    <Button className="w-full bg-telnar-orange hover:bg-telnar-orange/90 text-white" asChild>
                      <a href="/telnar-website-static.zip" download>
                        <Download className="mr-2 h-5 w-5" />
                        Descargar Ahora (ZIP)
                      </a>
                    </Button>
                    <div className="flex justify-center w-full">
                      <Button variant="outline" className="flex items-center">
                        <Share2 className="mr-2 h-4 w-4" />
                        Compartir Enlace
                      </Button>
                    </div>
                  </>
                ) : (
                  <Button
                    className="w-full bg-telnar-orange hover:bg-telnar-orange/90 text-white"
                    onClick={handleGenerate}
                    disabled={isGenerating}
                  >
                    {isGenerating ? (
                      <>
                        <div className="mr-2 h-5 w-5 animate-spin rounded-full border-2 border-white border-t-transparent"></div>
                        Generando archivo...
                      </>
                    ) : (
                      <>
                        <Download className="mr-2 h-5 w-5" />
                        Generar Versión Descargable
                      </>
                    )}
                  </Button>
                )}
              </CardFooter>
            </Card>

            <div className="mt-12">
              <h2 className="text-2xl font-bold mb-6">Instrucciones para visualizar el sitio descargado</h2>

              <div className="space-y-6">
                <div className="bg-white p-6 rounded-lg shadow border border-gray-100">
                  <h3 className="text-lg font-semibold mb-2 flex items-center">
                    <span className="flex items-center justify-center bg-telnar-orange text-white rounded-full w-6 h-6 mr-2 text-sm">
                      1
                    </span>
                    Descargar y descomprimir
                  </h3>
                  <p className="text-gray-700">
                    Una vez descargado el archivo ZIP, descomprímalo en una carpeta de su computadora.
                  </p>
                </div>

                <div className="bg-white p-6 rounded-lg shadow border border-gray-100">
                  <h3 className="text-lg font-semibold mb-2 flex items-center">
                    <span className="flex items-center justify-center bg-telnar-orange text-white rounded-full w-6 h-6 mr-2 text-sm">
                      2
                    </span>
                    Abrir el sitio
                  </h3>
                  <p className="text-gray-700">
                    Abra el archivo <code className="bg-gray-100 px-2 py-1 rounded">index.html</code> en su navegador
                    web preferido para acceder a la página principal.
                  </p>
                </div>

                <div className="bg-white p-6 rounded-lg shadow border border-gray-100">
                  <h3 className="text-lg font-semibold mb-2 flex items-center">
                    <span className="flex items-center justify-center bg-telnar-orange text-white rounded-full w-6 h-6 mr-2 text-sm">
                      3
                    </span>
                    Navegar por el sitio
                  </h3>
                  <p className="text-gray-700">
                    Navegue por el sitio haciendo clic en los enlaces. Todas las páginas funcionarán como en el sitio
                    web original.
                  </p>
                </div>

                <div className="bg-white p-6 rounded-lg shadow border border-gray-100">
                  <h3 className="text-lg font-semibold mb-2 flex items-center">
                    <span className="flex items-center justify-center bg-telnar-orange text-white rounded-full w-6 h-6 mr-2 text-sm">
                      4
                    </span>
                    Compartir con otros
                  </h3>
                  <p className="text-gray-700">
                    Para compartir el sitio con otros, simplemente comparta la carpeta completa o vuelva a comprimir los
                    archivos en un ZIP.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

