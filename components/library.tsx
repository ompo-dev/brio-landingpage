import { Card, CardContent } from "@/components/ui/card"
import { Book, Headphones, PenTool } from "lucide-react"

export default function Library() {
  return (
    <section id="library" className="container py-24 sm:py-32">
      <div className="mb-12 text-center">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Biblioteca Digital</h2>
        <p className="mt-4 text-muted-foreground">Acesse e contribua com nossa crescente coleção de conhecimento</p>
      </div>
      <div className="grid gap-8 md:grid-cols-3">
        <Card>
          <CardContent className="flex flex-col items-center p-6 text-center">
            <Book className="h-12 w-12 text-primary mb-4" />
            <h3 className="text-lg font-semibold mb-2">E-Books</h3>
            <p className="text-sm text-muted-foreground">
              Acesse milhares de livros, da literatura clássica a textos acadêmicos
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="flex flex-col items-center p-6 text-center">
            <Headphones className="h-12 w-12 text-primary mb-4" />
            <h3 className="text-lg font-semibold mb-2">Audiolivros</h3>
            <p className="text-sm text-muted-foreground">Ouça livros com recursos de áudio integrados</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="flex flex-col items-center p-6 text-center">
            <PenTool className="h-12 w-12 text-primary mb-4" />
            <h3 className="text-lg font-semibold mb-2">Anotações</h3>
            <p className="text-sm text-muted-foreground">Faça anotações pessoais e compartilhe insights</p>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}

