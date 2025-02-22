"use client"

import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Hero() {
  return (
    <section className="container py-24 space-y-12 md:py-32">
      <div className="flex flex-col items-center text-center space-y-4">
        <div className="rounded-full bg-muted px-3 py-1 text-sm leading-6 text-muted-foreground">
          Em desenvolvimento - Lançamento previsto para 2026
        </div>
        <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl">
          A Plataforma de
          <br className="hidden sm:inline" />
          <span className="text-primary"> Conhecimento Colaborativo</span>
        </h1>
        <p className="max-w-[42rem] leading-normal text-muted-foreground sm:text-xl sm:leading-8">
          Junte-se a nós na construção do futuro do conhecimento compartilhado. Uma plataforma onde ideias evoluem e o
          aprendizado é verdadeiramente colaborativo.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Button
            size="lg"
            onClick={() => {
              document.querySelector("#newsletter")?.scrollIntoView({ behavior: "smooth" })
            }}
          >
            Entre na Lista de Espera
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
          <Button
            variant="outline"
            size="lg"
            onClick={() => {
              document.querySelector("#vision")?.scrollIntoView({ behavior: "smooth" })
            }}
          >
            Saiba Mais
          </Button>
        </div>
      </div>
    </section>
  )
}

