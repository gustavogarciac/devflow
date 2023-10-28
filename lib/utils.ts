import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const getTimestamp = (createdAt: Date): string => {
  const now = new Date();
  const timeDifference = now.getTime() - createdAt.getTime();
  const seconds = Math.floor(timeDifference / 1000);

  if (seconds >= 31536000) {
    const yearsAgo = Math.floor(seconds / 31536000);
    return `${yearsAgo} year${yearsAgo !== 1 ? "s" : ""} ago`;
  } else if (seconds >= 2592000) {
    const monthsAgo = Math.floor(seconds / 2592000);
    return `${monthsAgo} month${monthsAgo !== 1 ? "s" : ""} ago`;
  } else if (seconds >= 86400) {
    const daysAgo = Math.floor(seconds / 86400);
    return `${daysAgo} day${daysAgo !== 1 ? "s" : ""} ago`;
  } else if (seconds >= 3600) {
    const hoursAgo = Math.floor(seconds / 3600);
    return `${hoursAgo} hour${hoursAgo !== 1 ? "s" : ""} ago`;
  } else if (seconds >= 60) {
    const minutesAgo = Math.floor(seconds / 60);
    return `${minutesAgo} minute${minutesAgo !== 1 ? "s" : ""} ago`;
  } else {
    return "Just now";
  }
};

export const formatNumberWithExtension = (number: number): string => {
  if (number >= 1000000) {
    const millions = Math.floor(number / 1000000);
    number /= 1000000;
    return `${millions}M`;
  } else if (number >= 1000) {
    const thousands = Math.floor(number / 1000);
    number /= 1000;
    return `${thousands}K`;
  } else {
    return number.toString();
  }
};

export function getJoinedDate(date: Date): string {
  if (!(date instanceof Date)) {
    throw new Error("Input is not a valid Date object");
  }

  const month = date.toLocaleString("default", { month: "long" });
  const year = date.getFullYear();

  return `${month} ${year}`;
}
