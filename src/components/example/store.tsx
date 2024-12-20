"use client"

import { Button } from "@/components/ui/button"
import { useBearStore } from "@/store/base"

export function StoreDemo() {
  const bears = useBearStore((state) => state.bears)
  const addABear = useBearStore((state) => state.addABear)

  return (
    <div className="flex h-5 items-center gap-4">
      <div>{bears}</div>
      <Button onClick={addABear}>Add a Bear</Button>
    </div>
  )
}
