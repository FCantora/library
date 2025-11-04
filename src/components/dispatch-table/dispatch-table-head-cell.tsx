import { flexRender, type Header } from "@tanstack/react-table";

import { SortIcon } from "../sort-icon";
import { TableHead } from "@/components";

import { SORTABLE_COLUMNS } from "./dispatch-table-constants";
import type { DispatchTypes } from "./dispatch-table.types";

export const TableHeadCell = ({
  header,
  index,
}: {
  header: Header<DispatchTypes, unknown>;
  index: number;
}) => {
  const isSortable = SORTABLE_COLUMNS.includes(String(header.id));

  return (
    <TableHead
      colSpan={header.colSpan}
      className={`text-left p-2 text-xs uppercase ${
        isSortable ? "cursor-pointer" : ""
      } ${
        index === 0
          ? "sticky left-0 bg-foreground top-0 z-30"
          : "z-20 bg-foreground"
      }`}
      style={{ width: header.getSize() }}
      onClick={header.column.getToggleSortingHandler()}
    >
      <div
        className={`flex flex-row items-center gap-2 ${
          index === 0 ? "pl-6" : ""
        }`}
      >
        {!header.isPlaceholder &&
          flexRender(header.column.columnDef.header, header.getContext())}
        {isSortable && (
          <SortIcon
            isSorted={!!header.column.getIsSorted()}
            isSortedDesc={header.column.getIsSorted() === "desc"}
          />
        )}
      </div>
    </TableHead>
  );
};
