"use client"

import { InteractiveHoverButton } from "@/components/magicui/interactive-hover-button"

export default function CTA() {
  return (
    <section id="cta" className="border-t">
      <div className="container flex flex-col items-center gap-4 py-24 text-center sm:py-32">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
          Pronto para Juntar-se à Revolução do Conhecimento?
        </h2>
        <p className="max-w-[42rem] leading-normal text-muted-foreground sm:text-xl sm:leading-8">
          Comece a contribuir hoje com a plataforma de conhecimento colaborativo.
        </p>
        <InteractiveHoverButton
          className="mt-4"
          onClick={() => window.open('https://github.com/brio-plataform', '_blank')}
          aria-label="Contribua no GitHub"
        >
          Contribua no GitHub
        </InteractiveHoverButton>
      </div>
    </section>
  )
}

