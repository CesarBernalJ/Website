"use client"

import Image from "next/image"
import { useState } from "react"

interface OptimizedImageProps {
  src: string
  alt: string
  width?: number
  height?: number
  fill?: boolean
  className?: string
  priority?: boolean
}

export default function OptimizedImage({
  src,
  alt,
  width,
  height,
  fill = false,
  className = "",
  priority = false,
}: OptimizedImageProps) {
  const [isError, setIsError] = useState(false)

  // Si la imagen original falla, usamos un placeholder
  const handleError = () => {
    setIsError(true)
  }

  // Determinar la fuente final de la imagen
  const finalSrc = isError
    ? `https://placehold.co/${width || 800}x${height || 600}/CCCCCC/999999?text=Imagen+no+disponible`
    : src.startsWith("/")
      ? src
      : `/${src}`

  // Para imágenes que usan fill
  if (fill) {
    return (
      <div className={`relative ${className}`}>
        <Image
          src={finalSrc || "/placeholder.svg"}
          alt={alt}
          fill
          className={className}
          onError={handleError}
          priority={priority}
          unoptimized
        />
      </div>
    )
  }

  // Para imágenes con dimensiones específicas
  return (
    <Image
      src={finalSrc || "/placeholder.svg"}
      alt={alt}
      width={width || 800}
      height={height || 600}
      className={className}
      onError={handleError}
      priority={priority}
      unoptimized
    />
  )
}

