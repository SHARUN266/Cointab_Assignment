// Returns a date formatted according to the current date.
export function DateFormate(date) {
  let ans = `${new Date(date).getDate()}/${new Date(
    date
  ).getMonth()}/${new Date(date).getFullYear()}`;
  return ans;
}
