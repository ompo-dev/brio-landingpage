import { Check } from "lucide-react"

const features = [
  {
    title: "Criação de Conteúdo",
    description: "Escreva artigos, TCCs e livros com auxílio de IA",
    items: [
      "Editor colaborativo em tempo real",
      "Integração com IA para sugestões",
      "Sistema de versionamento",
      "Templates acadêmicos",
    ],
  },
  {
    title: "Comunidade Acadêmica",
    description: "Conecte-se com instituições e pesquisadores",
    items: [
      "Perfis institucionais verificados",
      "Fóruns temáticos moderados",
      "Grupos de estudo",
      "Eventos acadêmicos",
    ],
  },
  {
    title: "Biblioteca Digital",
    description: "Acesso a uma vasta coleção de conhecimento",
    items: ["Livros acadêmicos e técnicos", "Artigos científicos", "Audiolivros integrados", "Sistema de anotações"],
  },
]

export default function Features() {
  return (
    <section id="features" className="container py-24 sm:py-32">
      <div className="mx-auto max-w-2xl md:text-center">
        <h2 className="font-bold text-3xl tracking-tighter sm:text-4xl md:text-5xl">Recursos Planejados</h2>
        <p className="mt-4 text-muted-foreground">
          Conheça algumas das funcionalidades que estamos desenvolvendo para a primeira versão do Brio.
        </p>
      </div>
      <div className="mx-auto mt-16 max-w-5xl sm:mt-20">
        <div className="grid grid-cols-1 gap-y-16 md:grid-cols-3 md:gap-x-12">
          {features.map((feature) => (
            <div key={feature.title} className="flex flex-col gap-6">
              <h3 className="text-xl font-semibold">{feature.title}</h3>
              <p className="text-sm text-muted-foreground">{feature.description}</p>
              <ul className="space-y-3">
                {feature.items.map((item) => (
                  <li key={item} className="flex items-center gap-3">
                    <Check className="h-4 w-4 text-primary" />
                    <span className="text-sm">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

