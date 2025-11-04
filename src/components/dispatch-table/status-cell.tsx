import { Statuses } from "../badge";
import CircleArrowUpRight from "@/assets/circle-arrow-up-right.png";
import CircleArrowDownRight from "@/assets/circle-arrow-down-right.png";
import type { ALL_STATUS_OPTIONS_KEY } from "./dispatch-table-constants";

type StatusCellProps = {
  value: keyof typeof ALL_STATUS_OPTIONS_KEY;
};

const StatusCell = (props: StatusCellProps) => {
  const { value } = props;

  if (value === "PICKUP" || value === "DELIVERY") {
    return (
      <div className="flex items-center gap-2">
        <img
          src={
            value === "PICKUP" ? CircleArrowUpRight : CircleArrowDownRight
          }
          alt={value}
          className="w-6 h-6"
        />
        <span className="text-info-lighter">{value}</span>
      </div>
    );
  } else {
    return (
      <Statuses
        status={value}
        size="small"
      ></Statuses>
    );
  }
};

export default StatusCell;
