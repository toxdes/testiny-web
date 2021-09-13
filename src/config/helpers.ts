// Helper functions

// converts a key-value object into query string
// https://stackoverflow.com/a/1714899/6027457
export const encodeToURIString = (obj: {
  [key: string]: string | number | boolean;
}): string => {
  let str = [];
  for (let p in obj)
    if (obj.hasOwnProperty(p)) {
      str.push(encodeURIComponent(p) + "=" + encodeURIComponent(obj[p]));
    }
  return str.join("&");
};

// capitalize first letter of each word in the string
export const firstUpperCase = (
  s: string,
  delim?: string,
  newDelim?: string
): string => {
  if (delim === undefined) delim = " ";
  if (newDelim === undefined) newDelim = delim;
  if (s === "") return s;
  return s
    .split(delim)
    .map((word) => {
      if (word === "" || word.length === 0) return "";
      return word[0].toUpperCase() + word.substring(1);
    })
    .join(newDelim);
};

// throttle function from lodash (stolen from https://stackoverflow.com/a/27078401/6027457)
export function throttle(callback: Function, interval: number) {
  let wait = false;
  let ctx = Object.create(null);
  return function () {
    if (!wait) {
      // Don't understand this, will be back soon
      callback.apply(ctx, arguments);
      wait = true;
      setTimeout(function () {
        wait = false;
      }, interval);
    }
  };
}

// open link in new tab
export const openInNewTab = (url: string) => {
  window.open(url, "_blank", "noopener,noreferrer");
};
