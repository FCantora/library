import Badge from "./badge";

type TYPE_VALUES = "TL" | "LTL";

type RatesBadgeProps = {
  value: TYPE_VALUES | TYPE_VALUES[];
  variant?: "single" | "multiple";
};

export function RatesBadge(props: RatesBadgeProps) {
  const { value, variant = "multiple" } = props;

  if (typeof value === "string") {
    if (variant === "single") {
      return (
        <div
          className={`w-fit h-6 text-white flex rounded-lg justify-center items-center font-bold text-xs uppercase p-2 ${
            value.toLocaleUpperCase() === "LTL" ? "bg-success" : "bg-info"
          }`}
        >
          {value || "-"}
        </div>
      );
    } else {
      return (
        <div className="flex gap-2">
          <Badge
            variant={value === "TL" ? "success" : "info"}
            size="small"
            className={`py-1 ${value === "LTL" ? "bg-info" : ""}`}
          >
            <p className="uppercase">{value}</p>
          </Badge>
        </div>
      );
    }
  }

  const values = Array.isArray(value) ? value : [value];

  return (
    <div className="flex gap-2">
      {values.map((val) => (
        <Badge
          key={val}
          variant={val === "TL" ? "success" : "info"}
          size="small"
          className={`py-1 ${val === "LTL" ? "bg-info" : ""}`}
        >
          {val}
        </Badge>
      ))}
    </div>
  );
}
