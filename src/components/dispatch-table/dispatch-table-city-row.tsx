import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components";

type DispatchTableCityRowProps = {
  city: string;
};

const DispatchTableCityRow = (props: DispatchTableCityRowProps) => {
  const { city } = props;

  const cityStateContent = (
    <div className="flex flex-row">
      <p className="whitespace-nowrap overflow-hidden text-ellipsis">{city}</p>
    </div>
  );

  const MAX_CELL_LENGTH = 16;

  if (city.length <= MAX_CELL_LENGTH) {
    return cityStateContent;
  } else {
    return (
      <TooltipProvider delayDuration={50}>
        <Tooltip>
          <TooltipTrigger asChild>
            <div>{cityStateContent}</div>
          </TooltipTrigger>
          <TooltipContent>{city}</TooltipContent>
        </Tooltip>
      </TooltipProvider>
    );
  }
};

export default DispatchTableCityRow;
