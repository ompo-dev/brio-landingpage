import Link from "next/link"
import Image from "next/image"
import { Github, Twitter, Linkedin } from "lucide-react"

export default function Footer() {
  return (
    <footer className="border-t">
      <div className="container flex flex-col gap-8 py-8 md:flex-row md:py-12">
        <div className="flex-1 space-y-4">
          <div className="flex items-center space-x-2">
            <img src="/Icon.svg" alt="Brio" className="h-6 w-6 invert" />
            <h2 className="text-2xl font-bold">Brio</h2>
          </div>
          <p className="text-sm text-muted-foreground">Conhecimento, do povo, para o povo, pelo povo.</p>
        </div>
        <div className="grid flex-1 grid-cols-1 gap-12 sm:grid-cols-2">
          <div className="space-y-4">
            <h3 className="text-sm font-medium">Links</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <Link href="#vision" className="text-muted-foreground hover:text-primary">
                  Visão
                </Link>
              </li>
              <li>
                <Link href="#features" className="text-muted-foreground hover:text-primary">
                  Recursos
                </Link>
              </li>
              <li>
                <Link href="#newsletter" className="text-muted-foreground hover:text-primary">
                  Lista de Espera
                </Link>
              </li>
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="text-sm font-medium">Redes Sociais</h3>
            <div className="flex space-x-4">
              <Link href="https://github.com/brio-edu/Brio" className="text-muted-foreground hover:text-primary">
                <Github className="h-5 w-5" />
              </Link>
              <Link href="https://www.linkedin.com/in/dev-maicon/" className="text-muted-foreground hover:text-primary">
                <Linkedin className="h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="container border-t py-6">
        <p className="text-center text-sm text-muted-foreground">
          © {new Date().getFullYear()} Brio. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  )
}

