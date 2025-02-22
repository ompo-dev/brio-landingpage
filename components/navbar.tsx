"use client"

import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center space-x-2">
          <img src="/Icon.svg" alt="Brio" className="h-6 w-6 invert" />
          <span className="text-2xl font-bold">Brio</span>
        </Link>
        <nav className="hidden md:flex items-center space-x-6">
          <Link
            href="#vision"
            className="text-sm font-medium hover:text-primary"
            onClick={(e) => {
              e.preventDefault()
              document.querySelector("#vision")?.scrollIntoView({ behavior: "smooth" })
            }}
          >
            Visão
          </Link>
          <Link
            href="#features"
            className="text-sm font-medium hover:text-primary"
            onClick={(e) => {
              e.preventDefault()
              document.querySelector("#features")?.scrollIntoView({ behavior: "smooth" })
            }}
          >
            Recursos
          </Link>
          <Link
            href="#newsletter"
            className="text-sm font-medium hover:text-primary"
            onClick={(e) => {
              e.preventDefault()
              document.querySelector("#newsletter")?.scrollIntoView({ behavior: "smooth" })
            }}
          >
            Participe
          </Link>
        </nav>
        <div className="flex items-center space-x-4">
          <Button
            onClick={() => {
              document.querySelector("#newsletter")?.scrollIntoView({ behavior: "smooth" })
            }}
          >
            Lista de Espera
          </Button>
        </div>
      </div>
    </header>
  )
}

