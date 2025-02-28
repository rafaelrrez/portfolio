import Link from "next/link"
import { ArrowUpRight, Github } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

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
              <Link href="https://github.com" target="_blank" rel="noreferrer">
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
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">
                  Hola, soy <span className="text-primary">Desarrollador</span>
                </h1>
                <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                  Especializado en crear aplicaciones web modernas con diferentes tecnologías.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Button>Contacto</Button>
                <Button variant="outline">Descargar CV</Button>
              </div>
            </div>
          </div>
        </section>

        <section className="py-12 md:py-24 lg:py-32" id="proyectos">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Mis Proyectos</h2>
                <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                  Explora mis trabajos más recientes en diferentes tecnologías.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-1 gap-6 mt-8 md:grid-cols-2 lg:grid-cols-3">
              <Card className="overflow-hidden">
                <CardHeader>
                  <CardTitle>E-commerce React</CardTitle>
                  <CardDescription>Tienda online desarrollada con React y Redux</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="aspect-video overflow-hidden rounded-lg bg-gray-100 dark:bg-gray-800">
                    <img
                      src="/placeholder.svg?height=400&width=600"
                      alt="Vista previa del proyecto de E-commerce"
                      className="object-cover w-full h-full"
                    />
                  </div>
                  <div className="mt-4">
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      Una tienda online completa con carrito de compras, gestión de usuarios y pasarela de pagos.
                    </p>
                    <div className="flex flex-wrap gap-2 mt-4">
                      <span className="inline-flex items-center rounded-md bg-blue-50 px-2 py-1 text-xs font-medium text-blue-700 ring-1 ring-inset ring-blue-700/10 dark:bg-blue-900/30 dark:text-blue-400 dark:ring-blue-400/30">
                        React
                      </span>
                      <span className="inline-flex items-center rounded-md bg-purple-50 px-2 py-1 text-xs font-medium text-purple-700 ring-1 ring-inset ring-purple-700/10 dark:bg-purple-900/30 dark:text-purple-400 dark:ring-purple-400/30">
                        Redux
                      </span>
                      <span className="inline-flex items-center rounded-md bg-green-50 px-2 py-1 text-xs font-medium text-green-700 ring-1 ring-inset ring-green-700/10 dark:bg-green-900/30 dark:text-green-400 dark:ring-green-400/30">
                        Stripe
                      </span>
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="flex justify-between">
                  <Button variant="outline" size="sm">
                    <Github className="h-4 w-4 mr-2" />
                    Código
                  </Button>
                  <Button size="sm">
                    Demo
                    <ArrowUpRight className="h-4 w-4 ml-2" />
                  </Button>
                </CardFooter>
              </Card>

              <Card className="overflow-hidden">
                <CardHeader>
                  <CardTitle>API Node.js</CardTitle>
                  <CardDescription>Backend RESTful con Node.js y Express</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="aspect-video overflow-hidden rounded-lg bg-gray-100 dark:bg-gray-800">
                    <img
                      src="/placeholder.svg?height=400&width=600"
                      alt="Vista previa del proyecto de API"
                      className="object-cover w-full h-full"
                    />
                  </div>
                  <div className="mt-4">
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      API RESTful con autenticación JWT, validación de datos y documentación con Swagger.
                    </p>
                    <div className="flex flex-wrap gap-2 mt-4">
                      <span className="inline-flex items-center rounded-md bg-green-50 px-2 py-1 text-xs font-medium text-green-700 ring-1 ring-inset ring-green-700/10 dark:bg-green-900/30 dark:text-green-400 dark:ring-green-400/30">
                        Node.js
                      </span>
                      <span className="inline-flex items-center rounded-md bg-yellow-50 px-2 py-1 text-xs font-medium text-yellow-700 ring-1 ring-inset ring-yellow-700/10 dark:bg-yellow-900/30 dark:text-yellow-400 dark:ring-yellow-400/30">
                        Express
                      </span>
                      <span className="inline-flex items-center rounded-md bg-blue-50 px-2 py-1 text-xs font-medium text-blue-700 ring-1 ring-inset ring-blue-700/10 dark:bg-blue-900/30 dark:text-blue-400 dark:ring-blue-400/30">
                        MongoDB
                      </span>
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="flex justify-between">
                  <Button variant="outline" size="sm">
                    <Github className="h-4 w-4 mr-2" />
                    Código
                  </Button>
                  <Button size="sm">
                    Demo
                    <ArrowUpRight className="h-4 w-4 ml-2" />
                  </Button>
                </CardFooter>
              </Card>

              <Card className="overflow-hidden">
                <CardHeader>
                  <CardTitle>Aplicación Python</CardTitle>
                  <CardDescription>Análisis de datos con Python y Django</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="aspect-video overflow-hidden rounded-lg bg-gray-100 dark:bg-gray-800">
                    <img
                      src="/placeholder.svg?height=400&width=600"
                      alt="Vista previa del proyecto de Python"
                      className="object-cover w-full h-full"
                    />
                  </div>
                  <div className="mt-4">
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      Aplicación web para análisis y visualización de datos con dashboard interactivo.
                    </p>
                    <div className="flex flex-wrap gap-2 mt-4">
                      <span className="inline-flex items-center rounded-md bg-blue-50 px-2 py-1 text-xs font-medium text-blue-700 ring-1 ring-inset ring-blue-700/10 dark:bg-blue-900/30 dark:text-blue-400 dark:ring-blue-400/30">
                        Python
                      </span>
                      <span className="inline-flex items-center rounded-md bg-green-50 px-2 py-1 text-xs font-medium text-green-700 ring-1 ring-inset ring-green-700/10 dark:bg-green-900/30 dark:text-green-400 dark:ring-green-400/30">
                        Django
                      </span>
                      <span className="inline-flex items-center rounded-md bg-red-50 px-2 py-1 text-xs font-medium text-red-700 ring-1 ring-inset ring-red-700/10 dark:bg-red-900/30 dark:text-red-400 dark:ring-red-400/30">
                        Pandas
                      </span>
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="flex justify-between">
                  <Button variant="outline" size="sm">
                    <Github className="h-4 w-4 mr-2" />
                    Código
                  </Button>
                  <Button size="sm">
                    Demo
                    <ArrowUpRight className="h-4 w-4 ml-2" />
                  </Button>
                </CardFooter>
              </Card>
            </div>
          </div>
        </section>
      </main>
      <footer className="border-t py-6 md:py-0">
        <div className="container flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row">
          <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
            © 2025 Mi Portfolio. Todos los derechos reservados.
          </p>
        </div>
      </footer>
    </div>
  )
}

