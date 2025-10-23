import { EllipsisVertical } from "lucide-react";
import { Button } from "../button";
import { CardAction } from "./card";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../dropdown";

export interface ActionMenuOption {
  label: string;
  onSelect: () => void;
  disabled?: boolean;
}

export interface CardActionMenuProps {
  options: ActionMenuOption[];
  buttonClassName?: string;
  iconClassName?: string;
  menuClassName?: string;
  actionClassName?: string;
  useAbsolutePosition?: boolean;
  absolutePosition?: "top-right" | "top-left" | "bottom-right" | "bottom-left";
}

export function CardActionMenu({
  options,
  buttonClassName = "p-2",
  iconClassName = "w-6 h-6 text-white",
  menuClassName = "px-4 py-3",
  actionClassName,
  useAbsolutePosition = false,
  absolutePosition = "top-right",
}: CardActionMenuProps) {
  // Determinar las clases de posicionamiento
  const getPositionClasses = () => {
    if (!useAbsolutePosition) return "";

    const baseClasses = "absolute";
    switch (absolutePosition) {
      case "top-right":
        return `${baseClasses} top-4 right-4`;
      case "top-left":
        return `${baseClasses} top-4 left-4`;
      case "bottom-right":
        return `${baseClasses} bottom-4 right-4`;
      case "bottom-left":
        return `${baseClasses} bottom-4 left-4`;
      default:
        return `${baseClasses} top-4 right-4`;
    }
  };

  const positionClasses = getPositionClasses();
  const finalActionClassName = useAbsolutePosition
    ? `${positionClasses} ${actionClassName || ""}`.trim()
    : actionClassName;

  return (
    <CardAction className={finalActionClassName}>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button
            data-testid="card-action-menu"
            variant="tertiary"
            className={buttonClassName}
          >
            <EllipsisVertical className={iconClassName} />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className={menuClassName} align="end">
          {options.map((option) => (
            <DropdownMenuItem
              key={option.label}
              className="py-2 pl-2 pr-3"
              onSelect={option.onSelect}
              disabled={option.disabled}
            >
              {option.label}
            </DropdownMenuItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>
    </CardAction>
  );
}
