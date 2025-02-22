"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { toast } from "sonner"

export default function Newsletter() {
  const [email, setEmail] = useState("")
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    try {
      const response = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.error || "Erro ao se inscrever")
      }

      toast.success("Inscrição realizada com sucesso!")
      setEmail("")
    } catch (error) {
      toast.error(error instanceof Error ? error.message : "Erro ao se inscrever. Tente novamente.")
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <section id="newsletter" className="border-t">
      <div className="container flex flex-col items-center gap-4 py-24 text-center sm:py-32">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Entre na Lista de Espera</h2>
        <p className="mx-auto max-w-[600px] text-muted-foreground">
          Seja um dos primeiros a experimentar o Brio. Receba atualizações sobre o desenvolvimento e tenha acesso
          antecipado ao lançamento.
        </p>
        <form onSubmit={handleSubmit} className="mx-auto mt-6 flex w-full max-w-md flex-col gap-4">
          <Input
            placeholder="Seu melhor e-mail"
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <Button className="w-full" size="lg" type="submit" disabled={isLoading}>
            {isLoading ? "Inscrevendo..." : "Inscrever-se"}
          </Button>
        </form>
      </div>
    </section>
  )
}

