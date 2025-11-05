import { cn } from "@/lib/utils";
import type { LoaderProps } from "./loader.types";

const SIZES = {
  small: "w-8 h-8",
  medium: "w-16 h-16",
  large: "w-24 h-24",
};

export default function Loader({ size = "large" }: LoaderProps) {
  return (
    <div
      data-testid="loader"
      className="flex items-center justify-center min-h-[calc(100vh-14rem)]"
    >
      <div className={cn("relative", SIZES[size])}>
        <div className="absolute w-full h-full rounded-full border-4 border-t-orange-300 border-r-neutral-400 border-b-white border-l-neutral-400 animate-spin"></div>
        <div className="absolute top-1/2 left-1/2 w-3/4 h-3/4 -mt-[37.5%] -ml-[37.5%] rounded-full border-4 border-t-white border-r-orange-300 border-b-neutral-400 border-l-white animate-spin animation-delay-150"></div>
        <div className="absolute top-1/2 left-1/2 w-1/2 h-1/2 -mt-[25%] -ml-[25%] rounded-full border-4 border-t-neutral-400 border-r-white border-b-orange-300 border-l-neutral-400 animate-spin animation-delay-300"></div>
      </div>
    </div>
  );
}
