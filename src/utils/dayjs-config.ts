import dayjs from "dayjs";
import isSameOrAfter from "dayjs/plugin/isSameOrAfter";
import isSameOrBefore from "dayjs/plugin/isSameOrBefore";
import isToday from "dayjs/plugin/isToday";
import isYesterday from "dayjs/plugin/isYesterday";
import timezone from "dayjs/plugin/timezone";
import utc from "dayjs/plugin/utc";

dayjs.extend(utc);

dayjs.extend(timezone);

dayjs.extend(isToday);

dayjs.extend(isYesterday);

dayjs.extend(isSameOrAfter);

dayjs.extend(isSameOrBefore);

export default dayjs;
