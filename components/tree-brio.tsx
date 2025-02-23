import { File, Folder, Tree } from "@/components/magicui/file-tree";
import React from "react";

export function TreeBrio({ onSelect }: { onSelect?: (id: string) => void }) {
  const handleFileSelect = (event: React.SyntheticEvent, value?: string) => {
    const selectedValue = value || (event.currentTarget as HTMLElement).getAttribute('value') || '';
    console.log('TreeBrio - File Selected:', selectedValue);
    
    const selectedElement = findElementById(ELEMENTS, selectedValue);
    if (selectedElement) {
      console.log('TreeBrio - Element Found:', selectedElement);
      
      // Always select the file/folder that was clicked, not its parent
      console.log('TreeBrio - Selecting:', selectedValue);
      onSelect?.(selectedValue);
    }
  };

  const findElementById = (elements: any[], id: string): any => {
    for (const element of elements) {
      if (element.id === id) return element;
      if (element.children) {
        const found = findElementById(element.children, id);
        if (found) return found;
      }
    }
    return null;
  };

  const findParentId = (elements: any[], childId: string, parentId: string | null = null): string | null => {
    for (const element of elements) {
      if (element.id === childId) return parentId;
      if (element.children) {
        const found = findParentId(element.children, childId, element.id);
        if (found) return found;
      }
    }
    return null;
  };

  return (
    <div className="relative flex h-fit w-full flex-col items-center justify-center overflow-hidden rounded-lg border bg-background">
      <Tree
        className="overflow-hidden rounded-md bg-background p-2"
        initialSelectedId="1"
        initialExpandedItems={["1", "3", "5", "7", "9"]}
        onSelect={(e) => handleFileSelect(e, undefined)}
      >
        <Folder 
          element={ELEMENTS[0].name} 
          value={ELEMENTS[0].id} 
          isSelectable={ELEMENTS[0].isSelectable}
          onSelect={(e) => handleFileSelect(e, undefined)}
        >
          <File 
            value="2" 
            isSelectable={true} 
            onSelect={(e) => handleFileSelect(e, "2")}
          >
            <p>{ELEMENTS[0]?.children?.[0]?.name}</p>
          </File>
          <Folder 
            element={ELEMENTS[0]?.children?.[1]?.name} 
            value={ELEMENTS[0]?.children?.[1]?.id} 
            isSelectable={ELEMENTS[0]?.children?.[1]?.isSelectable}
            onSelect={handleFileSelect}
          >
            <File 
              value="4" 
              isSelectable={true} 
              onSelect={(e) => handleFileSelect(e, "4")}
            >
              <p>{ELEMENTS[0]?.children?.[1]?.children?.[0]?.name}</p>
            </File>
          </Folder>
          <Folder 
            element={ELEMENTS[0]?.children?.[2]?.name} 
            value={ELEMENTS[0]?.children?.[2]?.id} 
            isSelectable={ELEMENTS[0]?.children?.[2]?.isSelectable}
          >
            <File 
              value="6" 
              isSelectable={true} 
              onSelect={(e) => handleFileSelect(e, "6")}
            >
              <p>{ELEMENTS[0]?.children?.[2]?.children?.[0]?.name}</p>
            </File>
          </Folder>
          <Folder 
            element={ELEMENTS[0]?.children?.[3]?.name} 
            value={ELEMENTS[0]?.children?.[3]?.id} 
            isSelectable={ELEMENTS[0]?.children?.[3]?.isSelectable}
          >
            <File 
              value="8" 
              isSelectable={true} 
              onSelect={(e) => handleFileSelect(e, "8")}
            >
              <p>{ELEMENTS[0]?.children?.[3]?.children?.[0]?.name}</p>
            </File>
          </Folder>
          <Folder 
            element={ELEMENTS[0]?.children?.[4]?.name} 
            value={ELEMENTS[0]?.children?.[4]?.id} 
            isSelectable={ELEMENTS[0]?.children?.[4]?.isSelectable}
          >
            <File 
              value="10" 
              isSelectable={true} 
              onSelect={(e) => handleFileSelect(e, "10")}
            >
              <p>{ELEMENTS[0]?.children?.[4]?.children?.[0]?.name}</p>
            </File>
          </Folder>
          <Folder 
            element={ELEMENTS[0]?.children?.[5]?.name} 
            value={ELEMENTS[0]?.children?.[5]?.id} 
            isSelectable={ELEMENTS[0]?.children?.[5]?.isSelectable}
          >
            <File 
              value="12" 
              isSelectable={true} 
              onSelect={(e) => handleFileSelect(e, "12")}
            >
              <p>{ELEMENTS[0]?.children?.[5]?.children?.[0]?.name}</p>
            </File>
          </Folder>
        </Folder>
      </Tree>
    </div>
  );
}

const ELEMENTS = [
  {
    id: "1",
    isSelectable: true,
    name: "Brio",
    children: [
      {
        id: "2",
        isSelectable: true,
        name: "feed",
        children: [
          {
            id: "3",
            isSelectable: true,
            name: "feed.tsx"
          }
        ]
      },
      {
        id: "4",
        isSelectable: true,
        name: "library",
        children: [
          {
            id: "5",
            isSelectable: true,
            name: "library.tsx"
          }
        ]
      },
      {
        id: "6",
        isSelectable: true,
        name: "create",
        children: [
          {
            id: "7",
            isSelectable: true,
            name: "create.tsx"
          }
        ]
      },
      {
        id: "8",
        isSelectable: true,
        name: "search",
        children: [
          {
            id: "9",
            isSelectable: true,
            name: "search.tsx"
          }
        ]
      },
      {
        id: "10",
        isSelectable: true,
        name: "forums",
        children: [
          {
            id: "11",
            isSelectable: true,
            name: "forums.tsx"
          }
        ]
      },
      {
        id: "12",
        isSelectable: true,
        name: "AI",
        children: [
          {
            id: "13",
            isSelectable: true,
            name: "ai.tsx"
          }
        ]
      }
    ]
  }
];
