export default function cleanSet(set, startString) {
  let result = '';
  for (const x of set) {
    if (x.startsWith(startString)) {
      result += `${x.slice(startString.length)}-`;
    }
  }
  return result.slice(0, -1);
}
