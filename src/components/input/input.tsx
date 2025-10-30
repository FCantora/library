import * as React from "react"

import { cn } from "@/lib/utils"

function Input({ className, type, ...props }: React.ComponentProps<"input">) {
  return (
    <input
      type={type}
      data-slot="input"
      className={cn(
          "flex h-10 w-full rounded-md border border-neutral-400 bg-neutral-800 px-3 py-2 text-sm ring-offset-neutral-700 file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-neutral-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-400 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:bg-neutral-200 disabled:text-neutral-300",
          type === "search" && [
            "[&::-webkit-search-cancel-button]:appearance-none",
            "[&::-webkit-search-cancel-button]:h-2",
            "[&::-webkit-search-cancel-button]:w-2",
            "[&::-webkit-search-cancel-button]:bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9IndoaXRlIiBzdHJva2Utd2lkdGg9IjIiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgY2xhc3M9ImZlYXRoZXIgZmVhdGhlci14Ij48bGluZSB4MT0iMTgiIHkxPSI2IiB4Mj0iNiIgeTI9IjE4Ij48L2xpbmU+PGxpbmUgeDE9IjYiIHkxPSI2IiB4Mj0iMTgiIHkyPSIxOCI+PC9saW5lPjwvc3ZnPg==')]",
            "[&::-webkit-search-cancel-button]:bg-[length:10px_10px]",
          ],
          className,
        )}
      {...props}
    />
  )
}

export { Input }
