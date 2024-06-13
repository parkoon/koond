import clsx, { ClassValue } from "clsx";
import { twMerge } from "tailwind-merge/es5";

export const cn = (...inputs: ClassValue[]) => {
  return twMerge(clsx(inputs));
};
