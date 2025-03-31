"use client"

import Image from "next/image"
import { useState } from "react"

export default function FallbackImage(props: any) {
  const [error, setError] = useState(false)

  if (error) {
    return (
      <div
        className={`bg-gray-200 flex items-center justify-center ${props.className || ""}`}
        style={{ width: props.width || "100%", height: props.height || "300px" }}
      >
        <span className="text-gray-500">Imagen no disponible</span>
      </div>
    )
  }

  // Para imágenes con fill
  if (props.fill) {
    return (
      <div className={`relative ${props.className || ""}`} style={{ width: "100%", height: "100%" }}>
        <Image
          {...props}
          src={props.src || "/placeholder.svg"}
          alt={props.alt || "Imagen"}
          onError={() => setError(true)}
          unoptimized
        />
      </div>
    )
  }

  // Para imágenes normales
  return (
    <Image
      {...props}
      src={props.src || "/placeholder.svg"}
      alt={props.alt || "Imagen"}
      width={props.width || 800}
      height={props.height || 600}
      onError={() => setError(true)}
      unoptimized
    />
  )
}

