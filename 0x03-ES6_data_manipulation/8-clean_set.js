export default function cleanSet(set, startString) {
  let result = '';
  const newSet = new Set(Array.from(set).filter((x) => x !== undefined));

  if (typeof startString !== 'string' || startString === '') {
    return result;
  }

  for (const x of newSet) {
    if (x.startsWith(startString)) {
      result += `${x.slice(startString.length)}-`;
    }
  }
  return result.slice(0, -1);
}
