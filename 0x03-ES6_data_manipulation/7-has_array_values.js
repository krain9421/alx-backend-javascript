export default function hasValuesFromArray(set, array) {
  for (const x of array) {
    if (set.has(x) === false) {
      return false;
    }
  }
  return true;
}
