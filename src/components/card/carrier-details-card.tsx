import type { LucideIcon } from "lucide-react";
import { Card } from "./card";
import { CardActionMenu, type ActionMenuOption } from "./card-action-menu";
import Badge from "../badge/badge";

export interface CarrierDetailsCardProps {
  icon: LucideIcon;
  title: string;
  carrierName: string;
  dotNumber: string;
  scac: string;
  mcNumber: string;
  ediCommunication: boolean;
  actionOptions?: ActionMenuOption[];
  className?: string;
}

export const CarrierDetailsCard = ({
  icon: Icon,
  title,
  carrierName,
  dotNumber,
  scac,
  mcNumber,
  ediCommunication,
  actionOptions,
  className,
}: CarrierDetailsCardProps) => {
  return (
    <Card className={`relative ${className || ""}`}>
      <div className="flex flex-row">
        <div className="flex gap-2 w-full">
          <div className="flex flex-col w-48 items-start gap-2">
            <div className="bg-icon-strong p-4 gap-2.5">
              <Icon className="w-12 h-12 stroke-warning-foreground stroke-2" />
            </div>
            <p className="text-2xl font-bold text-warning-foreground text-start">
              {title}
            </p>
          </div>
          <div className="flex-1">
            <div className="grid grid-cols-4 grid-rows-2 gap-5">
              <div className="flex flex-col gap-1 row-start-1 row-end-2 col-start-1 col-end-5">
                <p className="font-bold text-white text-xl">{carrierName}</p>
                <p className="font-normal text-sm text-neutral-300 uppercase">
                  Carrier Name
                </p>
              </div>
              <div className="flex flex-col gap-1 row-start-2 row-end-3 col-start-1 col-end-2">
                <p className="font-normal text-sm text-neutral-300 uppercase">
                  US DOT #
                </p>
                <p className="font-normal text-sm text-white uppercase">
                  {dotNumber}
                </p>
              </div>
              <div className="flex flex-col gap-1 row-start-2 row-end-3 col-start-2 col-end-3">
                <p className="font-normal text-sm text-neutral-300 uppercase">
                  SCAC
                </p>
                <p className="font-normal text-sm text-white uppercase">
                  {scac}
                </p>
              </div>
              <div className="flex flex-col gap-1 row-start-2 row-end-3 col-start-3 col-end-4">
                <p className="font-normal text-sm text-neutral-300 uppercase">
                  MC #
                </p>
                <p className="font-normal text-sm text-white uppercase">
                  {mcNumber}
                </p>
              </div>
              <div className="flex flex-col gap-1 row-start-2 row-end-3 col-start-4 col-end-5">
                <p className="font-normal text-sm text-neutral-300 uppercase text-nowrap">
                  COMMUNICATION BY EDI
                </p>
                <Badge
                  variant="success"
                  size="small"
                  className="text-xs font-bold rounded-full text-white capitalize w-fit py-[3px] px-1.5"
                >
                  {ediCommunication ? "Yes" : "No"}
                </Badge>
              </div>
            </div>
          </div>
        </div>
      </div>
      {actionOptions && actionOptions.length > 0 && (
        <CardActionMenu
          options={actionOptions}
          useAbsolutePosition={true}
          absolutePosition="top-right"
        />
      )}
    </Card>
  );
};
