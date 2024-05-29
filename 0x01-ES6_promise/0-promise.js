export default function getResponseFromAPI() {
  const p = new Promise((resolve, reject) => {
    const success = false;

    if (success) {
      resolve('Operation successful!');
    } else {
      reject(new Error('Operation failed!'));
    }
  });
  return p;
}
