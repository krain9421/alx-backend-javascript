export default function appendToEachArrayValue(array, appendString) {
  let idx = 0;
  for (const value of array) {
    const copy = [...array];
    copy[idx] = appendString + value;
    idx += 1;
  }

  return array;
}
