export default function updateUniqueItems(map) {
  // Throws an error if argument is not a Map
  if ((map instanceof Map) === false) {
    throw new Error('Cannot process');
  }
  for (const [k, v] of map) {
    if (v === 1) {
      map.set(k, 100);
    }
  }
  return map;
}
