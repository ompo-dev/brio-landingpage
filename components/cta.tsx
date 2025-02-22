"use client"

import { Button } from "@/components/ui/button"

export default function CTA() {
  return (
    <section className="border-t">
      <div className="container flex flex-col items-center gap-4 py-24 text-center sm:py-32">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
          Pronto para Juntar-se à Revolução do Conhecimento?
        </h2>
        <p className="max-w-[42rem] leading-normal text-muted-foreground sm:text-xl sm:leading-8">
          Comece a contribuir hoje com a plataforma de conhecimento colaborativo.
        </p>
        <Button size="lg" className="mt-4" onClick={() => {
          document.querySelector("#newsletter")?.scrollIntoView({ behavior: "smooth" })
        }}>
          Comece Gratuitamente
        </Button>
      </div>
    </section>
  )
}

