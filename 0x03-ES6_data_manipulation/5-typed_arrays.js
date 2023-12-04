export default function createInt8TypedArray(length, position, value) {
  const buff = new ArrayBuffer(length);
  const buffView = new Int8Array(buff);

  if (position >= length || position < 0) {
    throw new Error('Position outside range');
  }

  buffView[position] = value;
  const dataView = new DataView(buff);
  return dataView;
}
