import { Card, CardContent } from "@/components/ui/card"
import { BookOpen, Users, GitBranch, Award } from "lucide-react"

export default function Vision() {
  return (
    <section id="vision" className="container py-24 space-y-12">
      <div className="text-center space-y-4">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Nossa Visão</h2>
        <p className="mx-auto max-w-[700px] text-muted-foreground">
          Democratizar o conhecimento através de uma plataforma que combina o melhor do Notion, GitHub e Reddit, com
          foco em qualidade e colaboração.
        </p>
      </div>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardContent className="flex flex-col items-center space-y-4 p-6">
            <BookOpen className="h-12 w-12 text-primary" />
            <h3 className="text-xl font-semibold">Biblioteca Digital</h3>
            <p className="text-center text-sm text-muted-foreground">Acesso livre a conteúdo acadêmico e literário</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="flex flex-col items-center space-y-4 p-6">
            <Users className="h-12 w-12 text-primary" />
            <h3 className="text-xl font-semibold">Revisão por Pares</h3>
            <p className="text-center text-sm text-muted-foreground">Sistema colaborativo de feedback e melhorias</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="flex flex-col items-center space-y-4 p-6">
            <GitBranch className="h-12 w-12 text-primary" />
            <h3 className="text-xl font-semibold">Versionamento</h3>
            <p className="text-center text-sm text-muted-foreground">Histórico completo de evolução do conteúdo</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="flex flex-col items-center space-y-4 p-6">
            <Award className="h-12 w-12 text-primary" />
            <h3 className="text-xl font-semibold">Meritocracia</h3>
            <p className="text-center text-sm text-muted-foreground">Reconhecimento baseado na qualidade</p>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}

