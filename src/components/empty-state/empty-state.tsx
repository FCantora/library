import {
  MapPinX,
  PackageX,
  RotateCcw,
  SearchX,
  Store,
  Truck,
  TruckElectric,
} from "lucide-react";

import { Button } from "@/components/button";

type IconType =
  | "load"
  | "carrier"
  | "milestones"
  | "customerRate"
  | "carrierRate"
  | "filters";

type EmptyStatesProps = {
  iconType: IconType;
  title: string;
  paragraph: string;
  actionLabel?: string;
  handleActionClick?: () => void;
  variant?: "primary" | "tertiary";
};

const Icons = {
  load: <PackageX size={80} strokeWidth={1} />,
  milestones: <MapPinX size={80} strokeWidth={1} />,
  customerRate: <Store size={80} strokeWidth={1} />,
  carrierRate: <Truck size={80} strokeWidth={1} />,
  filters: <SearchX size={80} strokeWidth={1} />,
  carrier: <TruckElectric size={80} strokeWidth={1} />,
};

export const EmptyState = (props: EmptyStatesProps) => {
  const {
    iconType,
    title,
    paragraph,
    actionLabel,
    handleActionClick,
    variant,
  } = props;

  return (
    <div className="flex flex-col items-center justify-center text-center px-14 py-20 gap-6">
      <div className="flex flex-col items-center gap-6">
        {Icons[iconType]}
        <div className="max-w-[420px] flex flex-col gap-6">
          <p className="text-2xl font-bold text-neutral-800">{title}</p>
          <p className="text-base text-neutral-600">{paragraph}</p>
        </div>
      </div>
      {actionLabel && handleActionClick && (
        <div>
          <Button
            variant={variant}
            className="px-3 py-5.5 gap-2"
            size="medium"
            onClick={handleActionClick}
          >
            {variant === "tertiary" ? <RotateCcw className="w-5 h-5" /> : ""}
            {actionLabel}
          </Button>
        </div>
      )}
    </div>
  );
};
