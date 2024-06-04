export default function getStudentsByLocation(arr, city) {
  return arr.filter((stdnt) => stdnt.location === city);
}
