import "./styles.css";

import type { Row } from "@tanstack/react-table";
import { flexRender } from "@tanstack/react-table";
import { ChevronDown } from "lucide-react";

import type { DispatchTypes } from "./dispatch-table.types";

import { Button, TableCell, TableRow } from "@/components";

interface DispatchRowProps {
  row: Row<DispatchTypes>;
  isLastChild?: boolean;
}

export const DispatchRow = (props: DispatchRowProps) => {
  const { row, isLastChild = false } = props;
  const isOpen = row.getIsExpanded();
  const regex = /^\d+\.\d+$/;
  const isChild = regex.test(row.id);
  const canExpand = row.getCanExpand();

  const handleChevronClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (canExpand) {
      row.toggleExpanded();
    }
  };

  return (
    <TableRow
      className={`cursor-pointer text-base text-neutral-200 h-12 ${isChild ? "row-child" : "row-parent"} ${isOpen ? "open border-none" : ""} ${isLastChild ? "last-row-child" : ""}`}
      key={row.id}
    >
      {row.getVisibleCells().map((cell, index) => {
        const isChild = cell.row.depth !== 0;

        if (cell.column.id === "status" && !isChild) {
          return (
            <TableCell
              key={cell.id}
              className={`relative text-left p-2 whitespace-nowrap overflow-hidden text-ellipsis ${
                index === 0 ? "sticky bg-inherit left-0 z-10" : ""
              }`}
              style={{ width: cell.column.getSize() }}
            >
              <div className="flex flex-row items-center gap-2">
                <Button
                  variant="tertiary"
                  size="small"
                  onClick={handleChevronClick}
                  className="p-0"
                  disabled={!canExpand}
                >
                  <ChevronDown
                    className={`p-1 h-8 w-8 stroke-neutral-300 ${
                      isOpen ? "rotate-180" : ""
                    } ${!canExpand ? "opacity-50 cursor-not-allowed" : ""}`}
                  />
                </Button>
                {flexRender(cell.column.columnDef.cell, cell.getContext())}
              </div>
            </TableCell>
          );
        }

        return (
          <TableCell
            key={cell.id}
            className={`relative text-left p-2 whitespace-nowrap overflow-hidden text-ellipsis ${
              index === 0 ? "sticky bg-inherit left-0 z-10" : ""
            }`}
            style={{ width: cell.column.getSize() }}
          >
            {isChild && (
              <span className="absolute top-0 left-0 bottom-0 w-2"></span>
            )}
            {flexRender(cell.column.columnDef.cell, cell.getContext())}
          </TableCell>
        );
      })}
    </TableRow>
  );
};
