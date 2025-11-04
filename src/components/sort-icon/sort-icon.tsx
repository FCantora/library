import { ChevronDown, ChevronsUpDown, ChevronUp } from "lucide-react";

export const SortIcon = ({
  isSorted,
  isSortedDesc,
}: {
  isSorted: boolean;
  isSortedDesc: boolean;
}) => {
  if (!isSorted) return <ChevronsUpDown className="w-3 h-4 gap-0.5" />;

  return isSortedDesc ? (
    <ChevronDown className="w-3 h-4" />
  ) : (
    <ChevronUp className="w-3 h-4" />
  );
};
