export type IconType =
  | "load"
  | "carrier"
  | "milestones"
  | "customerRate"
  | "carrierRate"
  | "filters";

export interface EmptyStatesProps {
  iconType: IconType;
  title: string;
  paragraph: string;
  actionLabel?: string;
  handleActionClick?: () => void;
  variant?: "primary" | "tertiary";
}
