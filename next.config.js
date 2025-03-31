/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export", // Genera archivos estáticos
  images: {
    unoptimized: true, // Necesario para la exportación estática
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
    ],
  },
  // Asegura que los archivos HTML estén disponibles
  trailingSlash: false,
  // Añadir esta configuración para asegurar que los archivos en /public sean accesibles
  assetPrefix: process.env.NODE_ENV === "production" ? undefined : "",
}

module.exports = nextConfig

