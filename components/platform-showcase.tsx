"use client"

import { Safari } from "./magicui/safari"
import * as React from "react"
import { TreeBrio } from "./tree-brio"

interface PlatformArea {
  id: string
  name: string
  isSelectable?: boolean
  description: string
  image: string
  children?: PlatformArea[]
}

const platformAreas = [
  {
    id: "platform",
    name: "Plataforma",
    isSelectable: false,
    description: "",
    image: "",
    children: [
      {
        id: "2",
        name: "Feed",
        isSelectable: true,
        description: "Feed dinâmico personalizado baseado em seus interesses acadêmicos, mostrando publicações relevantes e recomendadas.",
        image: "/images/feed-brio.png"
      },
      {
        id: "4",
        name: "Biblioteca Digital",
        isSelectable: true,
        description: "Acesse uma vasta coleção de recursos acadêmicos, artigos e materiais de estudo.",
        image: "/images/book-brio.png"
      },
      {
        id: "6",
        name: "Criar",
        isSelectable: true,
        description: "Crie e compartilhe conteúdo acadêmico com ferramentas intuitivas e sistema de versionamento integrado.",
        image: "/images/project-brio.png"
      },
      {
        id: "8",
        name: "Buscar",
        isSelectable: true,
        description: "Pesquise e encontre facilmente o conteúdo acadêmico que você precisa.",
        image: "/images/search-brio.png"
      },
      {
        id: "10",
        name: "Fóruns",
        isSelectable: true,
        description: "Participe de debates construtivos e troque conhecimento com outros pesquisadores e estudantes.",
        image: "/images/forum-brio.png"
      },
      {
        id: "12",
        name: "IA",
        isSelectable: true,
        description: "Utilize recursos avançados de inteligência artificial para aprimorar sua experiência de aprendizado.",
        image: "/images/ai-brio.png"
      }
    ]
  }
];

export default function PlatformShowcase() {
  const [selectedArea, setSelectedArea] = React.useState<PlatformArea>(platformAreas[0].children[0]);

  const handleSelect = (id: string) => {
    // Map the TreeBrio IDs to platformAreas IDs
    const idMapping: { [key: string]: string } = {
      "2": "2",  // index.ts -> Feed
      "4": "4",  // feed.tsx -> Biblioteca Digital
      "6": "6",  // search.tsx -> Criar
      "8": "8",  // create.tsx -> Buscar
      "10": "10" // book.tsx -> Fóruns
    };

    const platformId = idMapping[id] || id;
    const area = platformAreas[0].children.find(area => area.id === platformId);
    if (area) {
      console.log('PlatformShowcase - Updating selected area:', area);
      setSelectedArea(area);
    }
  };

  return (
    <section className="container py-24 space-y-8" id="platform-showcase">
      <div className="text-center space-y-4">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Explore Nossa Plataforma</h2>
        <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
          Descubra as diferentes áreas do Brio e como elas se conectam para criar uma experiência única de aprendizado.
        </p>
      </div>
      
      <div className="grid gap-8 lg:grid-cols-[300px,1fr] lg:gap-12">
          <TreeBrio onSelect={handleSelect} />

        <div className="grid gap-8 lg:grid-cols-2 lg:gap-12 items-center">
          <div className="space-y-4">
            <h3 className="text-2xl font-bold">{selectedArea.name}</h3>
            <p className="text-gray-500 dark:text-gray-400 text-lg">
              {selectedArea.description}
            </p>
          </div>
          <Safari
            url="brioplataform.online"
            className="size-full"
            imageSrc={selectedArea.image}
          />
        </div>
      </div>
    </section>
  )
}