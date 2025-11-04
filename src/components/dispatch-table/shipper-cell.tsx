type ShipperCellProps = {
  value: string;
};

const ShipperCell = (props: ShipperCellProps) => {
  const { value } = props;

  return (
    <p className="whitespace-nowrap overflow-hidden text-ellipsis">{value}</p>
  );
};

export default ShipperCell;
