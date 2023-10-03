export default function getStudentsIdsSum(arr) {
  const ids = arr.map((x) => x.id);
  return ids.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
}
