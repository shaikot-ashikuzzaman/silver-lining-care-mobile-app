import { format, formatDuration, intervalToDuration, parseISO } from "date-fns";

import { VIEW_DATE_FORMAT } from "../constants/settings";

const TOTAL_HOURS_PER_DAY = 24;
const TOTAL_MINUTES_PER_HOUR = 60;
const defaultFormat = VIEW_DATE_FORMAT;

export const parseISOAndFormat = ({
    date,
    dateFormat = defaultFormat,
    parseISOFormat = defaultFormat,
}) => {
    return format(parseISO(date, parseISOFormat, new Date()), dateFormat);
};

export const convert12HourTo24Hour = (time12h) => {
    const [time, modifier] = time12h.split(" ");

    let [hours, minutes] = time.split(":");

    if (hours === "12") {
        hours = "00";
    }

    if (modifier === "PM" || modifier === "pm") {
        hours = parseInt(hours, 10) + 12;
    }

    return `${hours}:${minutes}`;
};

export const convert24HourTo12Hour = (time) => {
    time = time.toString().match(/^([01]\d|2[0-3])(:)([0-5]\d)(:[0-5]\d)?$/) || [time];

    if (time.length > 1) {
        time = time.slice(1);
        time[5] = +time[0] < 12 ? " AM" : " PM";
        time[0] = +time[0] % 12 || 12;
    }

    return time.join("");
};

export const formatDistanceLocale = {
    xDays: "{{count}}d",
    xHours: "{{count}}h",
    xMinutes: "{{count}}m",
};

export const shortEnLocale = {
    formatDistance: (token, count) => formatDistanceLocale[token].replace("{{count}}", count),
};

export const convertDurationToDayTime = (duration) => {
    let result = duration
        ? intervalToDuration({ start: 0, end: Number(duration) * 1000 * 60 })
        : intervalToDuration({ start: 0, end: 0 });
    result = result
        ? formatDuration(result, {
              format: ["days", "hours", "minutes"],
              locale: shortEnLocale,
              zero: true,
          })
        : "";
    return result;
};

export const convertDayTimeToDuration = ({ day = 0, hour = 0, minute = 0 } = {}) => {
    const totalDurationForDay = TOTAL_HOURS_PER_DAY * Number(day) * TOTAL_MINUTES_PER_HOUR;
    const totalDurationForHour = Number(hour) * TOTAL_MINUTES_PER_HOUR;
    const totalDurationForMinute = Number(minute);
    const totalDuration = totalDurationForDay + totalDurationForHour + totalDurationForMinute;
    return totalDuration;
};

export const getDayFromDuration = (duration) => {
    return convertDurationToDayTime(duration)?.split?.(" ")?.[0]?.slice?.(0, -1);
};

export const getHourFromDuration = (duration) => {
    return convertDurationToDayTime(duration)?.split?.(" ")?.[1]?.slice?.(0, -1);
};

export const getMinuteFromDuration = (duration) => {
    return convertDurationToDayTime(duration)?.split?.(" ")?.[2]?.slice?.(0, -1);
};
