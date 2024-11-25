export function DateFormater(date) {
  const dateObject = new Date(date);
  const options = { dateStyle: "medium", timeStyle: "short", hour12: true };
  return dateObject.toLocaleString(undefined, options);
}
