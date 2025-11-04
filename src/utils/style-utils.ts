import { EventType } from "@/components/dispatch-table/dispatch-table.types";

export const getIconBgClass = (position: string, type?: string) => {
  if (position === "first" && type === EventType.ACTION)
    return "icon-bg icon-bg-first-action";

  if (position === "first") return "icon-bg icon-bg-first";

  if (position === "last" && type === EventType.ACTION)
    return "icon-bg icon-bg-last-action";

  if (position === "last") return "icon-bg icon-bg-last";

  if (position === "single") return "icon-bg icon-bg.no-before";

  return "icon-bg";
};