export default function hasValuesFromArray(set, array) {
  if (new Set([...array.map((x) => set.has(x))]).has(false)) {
    return false;
  }
  return true;
}
