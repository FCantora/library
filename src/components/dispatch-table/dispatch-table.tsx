import type { SortingState } from "@tanstack/react-table";
import {
  getCoreRowModel,
  getExpandedRowModel,
  getFilteredRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { useState } from "react";

import {
  EmptyState,
  Table as TableShadcn,
  TableBody,
  TableHeader,
  /*TablePagination,*/
} from "@/components";

import { DispatchRow } from "./dispatch-row";
import { TableHeadCell } from "./dispatch-table-head-cell";
import type { DispatchTableProps } from "./dispatch-table.types";

export const DispatchTable = (props: DispatchTableProps) => {
  const { columns, data } = props;
  const [sorting, setSorting] = useState<SortingState>([]);

  const tableConfig = useReactTable({
    data,
    columns,
    getSubRows: (row) => row.multistop,
    getCoreRowModel: getCoreRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getExpandedRowModel: getExpandedRowModel(),
    getSortedRowModel: getSortedRowModel(),
    onSortingChange: setSorting,
    state: {
      sorting,
    },
  });

  return (
    <>
      <TableShadcn className="table-fixed mx-2 " data-testid="dispatch-table">
        <TableHeader>
          {tableConfig.getHeaderGroups().map((headerGroup) => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map((header, index) => (
                <TableHeadCell key={header.id} header={header} index={index} />
              ))}
            </tr>
          ))}
        </TableHeader>
        {tableConfig.getRowCount() === 0 ? (
          <TableBody>
            <tr>
              <td colSpan={columns.length} className="h-96">
                <div className="h-full flex items-center justify-center">
                  <EmptyState
                    iconType="load"
                    title="No dispatches found"
                    paragraph="We couldn't find any loads that match your current criteria. Try adjusting your filters."
                  />
                </div>
              </td>
            </tr>
          </TableBody>
        ) : (
          <TableBody>
            {tableConfig.getRowModel().rows.map((row, idx, arr) => {
              const isChild = /^\d+\.\d+$/.test(row.id);

              const isLastChild =
                isChild &&
                !arr.slice(idx + 1).some((r) => /^\d+\.\d+$/.test(r.id));

              return (
                <DispatchRow row={row} key={row.id} isLastChild={isLastChild} />
              );
            })}
          </TableBody>
        )}
      </TableShadcn>
    </>
  );
};
