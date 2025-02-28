"use client"; // 🔥 Esto hace que el componente sea interactivo

import Link from "next/link";
import { Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-background">
      <header className="sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur">
        <div className="container flex h-16 items-center space-x-4 sm:justify-between sm:space-x-0">
          <div className="flex gap-6 md:gap-10">
            <Link href="/" className="flex items-center space-x-2">
              <span className="inline-block font-bold">Mi Portfolio</span>
            </Link>
          </div>
          <div className="flex flex-1 items-center justify-end space-x-4">
            <nav className="flex items-center space-x-1">
              <Link
                href="https://github.com/rafaelrrez/proyectos"
                target="_blank"
                rel="noreferrer"
              >
                <div className="flex h-9 w-9 items-center justify-center rounded-md border transition-colors hover:bg-accent">
                  <Github className="h-5 w-5" />
                  <span className="sr-only">GitHub</span>
                </div>
              </Link>
            </nav>
          </div>
        </div>
      </header>
      <main className="container py-10">
        <section className="py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-9 text-center">
              <div className="space-y-9">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">
                  Hola, soy{" "}
                  <span className="text-primary">Rafael Ramírez Medina</span>
                </h1>
                <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                  Soy un desarrollador en formación con un gran interés en el
                  desarrollo Full Stack. Me apasiona aprender y mejorar mis
                  habilidades en tecnologías modernas para construir soluciones
                  funcionales y eficientes.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <button
                  onClick={() =>
                    window.open("mailto:rafael.rrez.medina@gmail.com")
                  }
                  className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-700"
                >
                  Contacto
                </button>
                <a
                  href="/CV_Rafael_Ramírez_Medina.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button variant="outline">Descargar CV</Button>
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className="py-12 md:py-24 lg:py-32" id="proyectos">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Mis Proyectos
                </h2>
                <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                  Explora mis proyectos en diferentes tecnologías.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-1 gap-6 mt-8 md:grid-cols-2 lg:grid-cols-3">
              {/* Cada tarjeta ahora tiene una estructura con altura fija para el header */}
              <Card className="flex flex-col h-full">
                <CardHeader className="flex-none">
                  <CardTitle>Mr. Rebujito</CardTitle>
                </CardHeader>
                <div className="flex-1 overflow-auto px-6">
                  <CardDescription className="mb-4">
                    Mr. Rebujito es una API desarrollada en Java con Spring Boot
                    para administrar casetas de feria. Permite gestionar la
                    información de forma segura con funciones como inicio de
                    sesión, registro y protección de datos. Además, facilita la
                    creación, edición y eliminación de registros de casetas.
                    También incluye documentación integrada para ayudar a los
                    desarrolladores a entender y usar la API fácilmente.
                  </CardDescription>
                </div>
                <CardContent className="flex-none pt-0">
                  <div className="aspect-video overflow-hidden rounded-lg bg-gray-100 dark:bg-gray-800">
                    <img
                      src="/spring.jpg?height=400&width=600"
                      alt="Vista previa del proyecto de E-commerce"
                      className="object-cover w-full h-full"
                    />
                  </div>
                </CardContent>
                <CardFooter className="flex-none justify-between">
                  <Link
                    href="https://github.com/rafaelrrez/proyectos/tree/main/Mr_Rebujito_API"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button variant="outline" size="sm">
                      <Github className="h-4 w-4 mr-2" />
                      Código
                    </Button>
                  </Link>
                </CardFooter>
              </Card>

              <Card className="flex flex-col h-full">
                <CardHeader className="flex-none">
                  <CardTitle>iDoctor App</CardTitle>
                </CardHeader>
                <div className="flex-1 overflow-auto px-6">
                  <CardDescription className="mb-4">
                    Aplicación móvil en Java para Android que facilita la
                    gestión de citas médicas entre pacientes y doctores. Utiliza
                    Firebase para autenticación, base de datos Firestore,
                    notificaciones push y almacenamiento de imágenes. Los
                    pacientes pueden buscar especialistas, reservar citas y
                    recibir recordatorios automáticos, mientras que los doctores
                    pueden administrar sus horarios y consultar información de
                    los pacientes en tiempo real.
                  </CardDescription>
                </div>
                <CardContent className="flex-none pt-0">
                  <div className="aspect-video overflow-hidden rounded-lg bg-gray-100 dark:bg-gray-800">
                    <img
                      src="/idoctor.jpg?height=400&width=600"
                      alt="Vista previa del proyecto de API"
                      className="object-cover w-full h-full"
                    />
                  </div>
                </CardContent>
                <CardFooter className="flex-none justify-between">
                  <Link
                    href="https://github.com/rafaelrrez/proyectos/tree/main/iDoctorApp"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button variant="outline" size="sm">
                      <Github className="h-4 w-4 mr-2" />
                      Código
                    </Button>
                  </Link>
                </CardFooter>
              </Card>

              <Card className="flex flex-col h-full">
                <CardHeader className="flex-none">
                  <CardTitle>TechShop App</CardTitle>
                </CardHeader>
                <div className="flex-1 overflow-auto px-6">
                  <CardDescription className="mb-4">
                    Aplicación web de comercio electrónico en Laravel y Blade,
                    con autenticación de usuarios, gestión de productos y
                    sistema de pedidos. Permite a los clientes explorar
                    diferentes categorías, agregar productos al carrito y
                    completar compras de manera segura. Además, los
                    administradores pueden gestionar el inventario y procesar
                    pedidos desde un panel de control.
                  </CardDescription>
                </div>
                <CardContent className="flex-none pt-0">
                  <div className="aspect-video overflow-hidden rounded-lg bg-gray-100 dark:bg-gray-800">
                    <img
                      src="/TechShop.jpg?height=400&width=600"
                      alt="Vista previa del proyecto de Python"
                      className="object-cover w-full h-full"
                    />
                  </div>
                </CardContent>
                <CardFooter className="flex-none justify-between">
                  <Link
                    href="https://github.com/rafaelrrez/proyectos/tree/main/TechShopWebApp"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button variant="outline" size="sm">
                      <Github className="h-4 w-4 mr-2" />
                      Código
                    </Button>
                  </Link>
                </CardFooter>
              </Card>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
