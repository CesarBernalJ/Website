// Este archivo es solo para referencia, ya que la generación real del ZIP
// se haría en el servidor o mediante un proceso de build

export async function generateStaticSite(): Promise<string> {
  // En un entorno real, aquí ejecutaríamos el comando de exportación
  // y crearíamos un archivo ZIP con los resultados

  // Simulamos el proceso para la demostración
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("/telnar-website-static.zip")
    }, 2000)
  })
}

