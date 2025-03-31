"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Download, FileDown, Info, Share2 } from "lucide-react"

export default function VersionHTMLPage() {
  const [isDownloading, setIsDownloading] = useState(false)
  const [previewOpened, setPreviewOpened] = useState(false)

  // Función para descargar el archivo HTML
  const handleDownload = () => {
    setIsDownloading(true)

    // Crear un enlace para descargar el archivo
    const link = document.createElement("a")
    link.href = "/telnar-standalone.html"
    link.download = "telnar-website.html"
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)

    setTimeout(() => {
      setIsDownloading(false)
    }, 1500)
  }

  // Función para abrir la previsualización
  const handlePreview = () => {
    window.open("/telnar-standalone.html", "_blank", "noopener,noreferrer")
    setPreviewOpened(true)

    // Resetear el mensaje después de 3 segundos
    setTimeout(() => {
      setPreviewOpened(false)
    }, 3000)
  }

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="bg-telnar-dark text-telnar-cream py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-3xl md:text-5xl font-bold mb-4">Versión HTML Única</h1>
            <p className="text-lg md:text-xl">
              Descargue nuestro sitio web completo en un único archivo HTML para compartir o visualizar sin conexión.
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
                  <FileDown className="mr-2 h-6 w-6 text-telnar-orange" />
                  Descargar Sitio Web en HTML Único
                </CardTitle>
                <CardDescription>
                  Obtenga una versión completa del sitio web de Agrícolas Telnar S.A.S. en un único archivo HTML que
                  puede compartir fácilmente.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                    <div className="flex items-start">
                      <Info className="h-5 w-5 text-blue-500 mr-2 mt-0.5 shrink-0" />
                      <div>
                        <h3 className="font-medium text-gray-900">¿Por qué un archivo HTML único?</h3>
                        <p className="text-gray-700 text-sm mt-1">
                          Un archivo HTML único contiene todo lo necesario para visualizar el sitio web sin necesidad de
                          conexión a internet o archivos adicionales. Es perfecto para compartir por correo electrónico
                          o mensajería.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-telnar-orange/5 p-4 rounded-lg border border-telnar-orange/20">
                    <h3 className="font-medium text-telnar-dark mb-2">Ventajas:</h3>
                    <ul className="space-y-2 text-gray-700">
                      <li className="flex items-center">
                        <FileDown className="h-4 w-4 text-telnar-orange mr-2" />
                        No requiere conexión a internet para visualizarlo
                      </li>
                      <li className="flex items-center">
                        <FileDown className="h-4 w-4 text-telnar-orange mr-2" />
                        Fácil de compartir por correo electrónico o mensajería
                      </li>
                      <li className="flex items-center">
                        <FileDown className="h-4 w-4 text-telnar-orange mr-2" />
                        Se abre directamente en cualquier navegador web
                      </li>
                      <li className="flex items-center">
                        <FileDown className="h-4 w-4 text-telnar-orange mr-2" />
                        No requiere descomprimir archivos ni instalaciones
                      </li>
                    </ul>
                  </div>
                </div>
              </CardContent>
              <CardFooter className="flex flex-col space-y-4">
                <Button
                  className="w-full bg-telnar-orange hover:bg-telnar-orange/90 text-white"
                  onClick={handleDownload}
                  disabled={isDownloading}
                >
                  {isDownloading ? (
                    <>
                      <div className="mr-2 h-5 w-5 animate-spin rounded-full border-2 border-white border-t-transparent"></div>
                      Descargando...
                    </>
                  ) : (
                    <>
                      <Download className="mr-2 h-5 w-5" />
                      Descargar Archivo HTML
                    </>
                  )}
                </Button>
                <div className="flex justify-center w-full">
                  <Button variant="outline" className="flex items-center" onClick={handlePreview}>
                    <Share2 className="mr-2 h-4 w-4" />
                    Ver Previsualización
                  </Button>
                </div>
                {previewOpened && (
                  <p className="text-center text-sm text-green-600 mt-2 animate-fade-in">
                    ¡Previsualización abierta en una nueva pestaña!
                  </p>
                )}
              </CardFooter>
            </Card>

            <div className="mt-12">
              <h2 className="text-2xl font-bold mb-6">Instrucciones de uso</h2>

              <div className="space-y-6">
                <div className="bg-white p-6 rounded-lg shadow border border-gray-100">
                  <h3 className="text-lg font-semibold mb-2 flex items-center">
                    <span className="flex items-center justify-center bg-telnar-orange text-white rounded-full w-6 h-6 mr-2 text-sm">
                      1
                    </span>
                    Descargar el archivo
                  </h3>
                  <p className="text-gray-700">
                    Haga clic en el botón "Descargar Archivo HTML" para guardar el archivo en su dispositivo.
                  </p>
                </div>

                <div className="bg-white p-6 rounded-lg shadow border border-gray-100">
                  <h3 className="text-lg font-semibold mb-2 flex items-center">
                    <span className="flex items-center justify-center bg-telnar-orange text-white rounded-full w-6 h-6 mr-2 text-sm">
                      2
                    </span>
                    Abrir el archivo
                  </h3>
                  <p className="text-gray-700">
                    Simplemente haga doble clic en el archivo descargado para abrirlo en su navegador web
                    predeterminado.
                  </p>
                </div>

                <div className="bg-white p-6 rounded-lg shadow border border-gray-100">
                  <h3 className="text-lg font-semibold mb-2 flex items-center">
                    <span className="flex items-center justify-center bg-telnar-orange text-white rounded-full w-6 h-6 mr-2 text-sm">
                      3
                    </span>
                    Compartir con otros
                  </h3>
                  <p className="text-gray-700">
                    Comparta el archivo HTML por correo electrónico, WhatsApp, o cualquier otra plataforma de
                    mensajería. El destinatario solo necesita hacer clic en el archivo para verlo.
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

