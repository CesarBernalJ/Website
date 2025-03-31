"use client"

import type React from "react"

import { useState } from "react"
import Image from "next/image"
import { MapPin, Phone, Mail, Send, ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    message: "",
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false)
      setIsSubmitted(true)
      setFormData({
        name: "",
        company: "",
        email: "",
        phone: "",
        message: "",
      })
    }, 1500)
  }

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="bg-telnar-dark text-telnar-cream py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-3xl md:text-5xl font-bold mb-4">Contáctenos</h1>
            <p className="text-lg md:text-xl">
              Estamos aquí para responder a sus preguntas y ayudarle a encontrar los productos agrícolas perfectos para
              sus necesidades.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <Card>
              <CardHeader className="text-center pb-2">
                <MapPin className="w-10 h-10 mx-auto text-telnar-orange mb-2" />
                <CardTitle>Dirección</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-gray-700">Cl. 37 Sur # 72L-77, Kennedy, Bogotá, Colombia</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="text-center pb-2">
                <Phone className="w-10 h-10 mx-auto text-telnar-orange mb-2" />
                <CardTitle>Teléfono</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-gray-700">+57 (123) 456-7890</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="text-center pb-2">
                <Mail className="w-10 h-10 mx-auto text-telnar-orange mb-2" />
                <CardTitle>Correo Electrónico</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <a href="mailto:info@telnar.com.co" className="text-gray-700 hover:text-telnar-orange">
                  info@telnar.com.co
                </a>
              </CardContent>
            </Card>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-2xl font-bold mb-6">Envíenos un Mensaje</h2>

              {isSubmitted ? (
                <div className="bg-telnar-orange/10 border border-telnar-orange/20 rounded-lg p-6 text-center">
                  <Send className="w-12 h-12 mx-auto text-telnar-orange mb-4" />
                  <h3 className="text-xl font-semibold mb-2">¡Mensaje Enviado!</h3>
                  <p className="text-gray-700">
                    Gracias por contactarnos. Nos pondremos en contacto con usted lo antes posible.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="name">Nombre Completo *</Label>
                      <Input id="name" name="name" value={formData.name} onChange={handleChange} required />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="company">Empresa</Label>
                      <Input id="company" name="company" value={formData.company} onChange={handleChange} />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="email">Correo Electrónico *</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone">Teléfono</Label>
                      <Input id="phone" name="phone" value={formData.phone} onChange={handleChange} />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Mensaje *</Label>
                    <Textarea
                      id="message"
                      name="message"
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-telnar-orange hover:bg-telnar-orange/90 text-white"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Enviando..." : "Enviar Mensaje"}
                  </Button>
                </form>
              )}
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-6">Nuestra Ubicación</h2>
              <div className="rounded-lg overflow-hidden h-[400px] w-full border border-gray-200 shadow-md">
                <div className="relative w-full h-full">
                  <Image
                    src="/images/google-map.jpg"
                    alt="Mapa de ubicación de Agrícolas Telnar"
                    fill
                    className="object-cover"
                  />
                  <a
                    href="https://www.google.com/maps/place/Cl.+37+Sur+%23+72L-77,+Kennedy,+Bogot%C3%A1,+D.C.,+Bogot%C3%A1,+Bogot%C3%A1,+D.C./@4.615666,-74.143805,753m/data=!3m2!1e3!4b1!4m6!3m5!1s0x8e3f9ebc59dfd615:0x94dfe4e9bd584638!8m2!3d4.615666!4d-74.143805!16s%2Fg%2F11l_5_plfb?hl=es&entry=ttu"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="absolute bottom-4 right-4 bg-white py-2 px-4 rounded-md shadow-md flex items-center text-telnar-dark hover:bg-gray-100 transition-colors"
                  >
                    <span className="mr-2">Ver en Google Maps</span>
                    <ExternalLink className="h-4 w-4" />
                  </a>
                </div>
              </div>
              <p className="mt-4 text-center text-gray-600">Cl. 37 Sur # 72L-77, Kennedy, Bogotá, Colombia</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

