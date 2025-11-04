/**
 * @description Formats a number as US currency with dollar sign
 * Always shows 2 decimal places
 * Uses US number format (commas for thousands, period for decimals)
 *
 * @example
 * formatCurrency(1234.56) => "$1,234.56"
 * formatCurrency(1234) => "$1,234.00"
 * formatCurrency(1234.5) => "$1,234.50"
 * formatCurrency(0.99) => "$0.99"
 * formatCurrency(0) => "$0.00"
 */
export function formatCurrency(value: number): string {
  const formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });

  return formatter.format(value);
}

/**
 * Formats a number with 2 decimal places
 * Always shows 2 decimal places
 * Uses US number format (commas for thousands, period for decimals)
 *
 * Examples:
 * formatNumber(20) => "20.00"
 * formatNumber(20.0) => "20.00"
 * formatNumber(20.01) => "20.01"
 * formatNumber(20.011) => "20.01"
 * formatNumber(1234.56) => "1,234.56"
 * formatNumber(5.5) => "5.50"
 */
export function formatNumber(value: number): string {
  if (value === null) {
    return "-";
  }

  const formatter = new Intl.NumberFormat("en-US", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });

  return formatter.format(value);
}

export const formatPercentage = (value: number): string => {
  if (value === null) {
    return "-";
  }

  return `${formatNumber(value)}%`;
};

export const formatRoundDecimals = (value: number | string): string => {
  const numberValue = Number(value);

  if (isNaN(numberValue)) {
    return "0.00";
  }

  return (Math.round(numberValue * 100) / 100).toFixed(2);
};

export const toOrdinal = (n: number) => {
  const suffixes = ["th", "st", "nd", "rd"];

  const v = Math.abs(n % 100);

  return n + (suffixes[(v - 20) % 10] || suffixes[v] || suffixes[0]);
};
