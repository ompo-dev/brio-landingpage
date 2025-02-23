"use client";

import { cn } from "@/lib/utils";
import { InteractiveGridPattern } from "@/components/magicui/interactive-grid-pattern";
import { useEffect, useState } from "react";

export function Background() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    return () => setIsMounted(false);
  }, []);

  if (!isMounted) return null;

  return (
    <div className="fixed inset-0 -z-1 overflow-hidden pointer-events-none">
      <InteractiveGridPattern
        className={cn(
          "[mask-image:radial-gradient(400px_circle_at_center,white,transparent)]"
        )}
        width={50}
        height={50}
        squares={[180, 180]}
        squaresClassName="hover:fill-blue-500/30"
      />
    </div>
  );
}