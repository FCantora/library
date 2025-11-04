import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components";

type CustomerLoadNumberCellProps = {
  value: string;
};

const CustomerLoadNumberCell = (props: CustomerLoadNumberCellProps) => {
  const { value } = props;

  const valueToString = String(value);

  const cellLength = 11;

  if (valueToString.length <= cellLength) {
    return (
      <>
        <p className="whitespace-nowrap overflow-hidden text-ellipsis">
          {valueToString}
        </p>
      </>
    );
  } else {
    return (
      <TooltipProvider delayDuration={50}>
        <Tooltip>
          <TooltipTrigger asChild>
            <div>
              <p className="whitespace-nowrap overflow-hidden text-ellipsis">
                {valueToString}
              </p>
            </div>
          </TooltipTrigger>
          <TooltipContent>{valueToString}</TooltipContent>
        </Tooltip>
      </TooltipProvider>
    );
  }
};

export default CustomerLoadNumberCell;
