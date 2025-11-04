// import type { ColumnDef } from "@tanstack/react-table";
// import { useSearchParams } from "react-router";

import type { ColumnDef } from "@tanstack/react-table";
import type { DispatchTypes, TYPE_VALUES } from "./dispatch-table.types";
import { RatesBadge, StopStatuses } from "../badge";
import dayjs from "dayjs";
import { DATE_FORMATS, type ALL_STATUS_OPTIONS_KEY, type ALL_STOPS_STATUS_OPTIONS_KEY } from "./dispatch-table-constants";
import DispatchTableCityRow from "./dispatch-table-city-row";
import { toOrdinal } from "@/utils/format-numbers";
import type { Severity } from "../badge/stop-statuses";
import getClientTimezone from "@/utils/client-timezone";
import CustomerLoadNumberCell from "./customer-load-number-cell";
import ShipperCell from "./shipper-cell";
import StatusCell from "./status-cell";

const DispatchColumns = () => {

  const DISPATCH_COLUMNS: ColumnDef<DispatchTypes>[] = [
    {
      accessorKey: "status" as keyof DispatchTypes,
      header: "Load Status",
      size: 190,
      cell: ({ getValue }) => {
        const value = getValue() as keyof typeof ALL_STATUS_OPTIONS_KEY;

        return <StatusCell value={value} />;
      },
    },
    {
      accessorKey: "customerLoadNumber" as keyof DispatchTypes,
      header: "Customer load #",
      size: 130,
      cell: ({ getValue }) => {
        const value = getValue() as string;

        return <CustomerLoadNumberCell value={value} />;
      },
    },
    {
      accessorKey: "loadNumber" as keyof DispatchTypes,
      header: "Load #",
      size: 90,
    //   cell: ({ getValue }) => (
    //     <HighlightedText text={getValue() as string} highlight={searchTerm} />
    //   ),
    },
    {
      accessorKey: "shipper" as keyof DispatchTypes,
      header: "Location",
      size: 158,
      cell: ({ getValue }) => {
        const value = getValue() as string;

        return <ShipperCell value={value} />;
      },
    },
    {
      accessorKey: "city" as keyof DispatchTypes,
      header: "Pickup",
      size: 170,
      cell: ({ getValue }) => {
        const value = getValue() as string;

        return <DispatchTableCityRow city={value} />;
      },
    },
    {
      accessorKey: "destination" as keyof DispatchTypes,
      header: "Delivery",
      size: 120,
      cell: ({ getValue }) => {
        const value = getValue() as string;

        return <DispatchTableCityRow city={value} />;
      },
    },
    {
      accessorKey: "numberOfStops" as keyof DispatchTypes,
      header: "Stops",
      size: 76,
      cell: ({ getValue, row }) => {
        const stops = getValue() as number;

        const parentRow = row.getParentRow?.();

        let label: string = "";

        if (parentRow) {
          const subRows = parentRow.subRows || [];

          const index = subRows.findIndex((r) => r.id === row.id);

          label = toOrdinal(index + 1);
        } else {
          if (stops > 2) {
            label = `${stops - 1}-1`;
          } else if (stops <= 2) {
            label = `1-1`;
          } else {
            label = stops.toString();
          }
        }

        return <div className="flex justify-center items-center">{label}</div>;
      },
    },
    {
      accessorKey: "stopStatus" as keyof DispatchTypes,
      header: "Stop Status",
      size: 200,
      cell: ({ getValue, row }) => {
        const { severitySuffix } = row.original || null;

        return (
          <div>
            <StopStatuses
              status={String(
                (getValue() as keyof typeof ALL_STOPS_STATUS_OPTIONS_KEY) || "-"
              )}
              severitySuffix={severitySuffix as Severity}
            ></StopStatuses>
          </div>
        );
      },
    },
    {
      accessorKey: "totalMiles" as keyof DispatchTypes,
      header: "Miles",
      size: 60,
      cell: ({ getValue }) => {
        const value = getValue();

        return Number(value) > 0 ? value : "-";
      },
    },
    {
      accessorKey: "palletCube" as keyof DispatchTypes,
      header: "Pallet / Cube",
      size: 105,
      accessorFn: (d) => `${d.shippedPallets || "-"} / ${d.shippedCube || "-"}`,
    },
    {
      accessorKey: "customer" as keyof DispatchTypes,
      header: "Customer",
      size: 100,
      cell: ({ getValue }) => (
        <div className="font-bold">{getValue<string>()}</div>
      ),
    },
    {
      accessorKey: "rateType" as keyof DispatchTypes,
      header: "Type",
      size: 65,
      cell: ({ getValue }) => {
        const value: TYPE_VALUES = (
          (getValue() as TYPE_VALUES) || "-"
        ).toUpperCase() as TYPE_VALUES;

        return <RatesBadge value={value} />;
      },
    },
    {
      accessorKey: "pickupDate" as keyof DispatchTypes,
      header: "Date",
      size: 80,
      cell: ({ getValue }) => {
        const pickup = getValue() as Date;

        const clientTimezone = getClientTimezone();

        const formattedDate = dayjs(pickup)
          .tz(clientTimezone)
          .format(DATE_FORMATS.DISPATCH_TABLE);

        return <div className="flex justify-between">{formattedDate}</div>;
      },
    },
    {
      accessorKey: "carrier" as keyof DispatchTypes,
      header: "Carrier",
      size: 80,
      cell: ({ row }) => {
        const carrier = row.getValue("carrier") as string;

        return carrier ? carrier : "-";
      },
    },
    {
      accessorKey: "kma" as keyof DispatchTypes,
      header: "KMA",
      size: 100,
      cell: ({ row }) => {
        const { multistop, numberOfStops: stops, kma } = row.original;

        const uniqueKmas = new Set(multistop?.map((stop) => stop.kma));

        const kmaCount = uniqueKmas.size - 1;

        if (
          Number(stops) > 1 &&
          multistop &&
          multistop.length > 1 &&
          kmaCount >= 1
        ) {
          return (
            <>
              {multistop[0].kma} <b>+{kmaCount}</b>
            </>
          );
        }

        return kma;
      },
    },
  ];

  return DISPATCH_COLUMNS;
};

export default DispatchColumns;
