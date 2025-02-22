import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const forums = [
  {
    title: "Filosofia",
    description: "Explore questões fundamentais sobre existência, conhecimento e ética",
    topics: ["Epistemologia", "Ética", "Metafísica"],
    active: 1234,
  },
  {
    title: "Ciência",
    description: "Discuta as últimas descobertas e metodologias científicas",
    topics: ["Física", "Biologia", "Química"],
    active: 2341,
  },
  {
    title: "Tecnologia",
    description: "Compartilhe insights sobre tecnologias emergentes e seus impactos",
    topics: ["IA", "Blockchain", "Programação"],
    active: 3412,
  },
]

export default function Forums() {
  return (
    <section id="forums" className="container py-24 sm:py-32">
      <div className="mb-12 text-center">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Comunidades do Conhecimento</h2>
        <p className="mt-4 text-muted-foreground">Participe de discussões relevantes em nossos fóruns temáticos</p>
      </div>
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {forums.map((forum) => (
          <Card key={forum.title}>
            <CardHeader>
              <CardTitle>{forum.title}</CardTitle>
              <CardDescription>{forum.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                {forum.topics.map((topic) => (
                  <Badge key={topic} variant="secondary">
                    {topic}
                  </Badge>
                ))}
              </div>
              <p className="mt-4 text-sm text-muted-foreground">{forum.active} active members</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}

