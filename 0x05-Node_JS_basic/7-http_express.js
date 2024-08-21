const xprss = require('express');
const fs = require('fs');

const hostname = '127.0.0.1';
const port = 1245;

const app = xprss();

const FILE = process.argv.length > 2 ? process.argv[2] : '';

function countStudents(path) {
  return new Promise((resolve, reject) => {
    if (fs.existsSync(path) === false) {
      reject(new Error('Cannot load the database'));
      return;
    }
    fs.readFile(path, (error, file) => {
      if (error) {
        reject(error);
        return;
      }
      const report = [];
      const lines = file
        .toString()
        .trim()
        .split('\n')
        .slice(1)
        .filter((line) => line.length > 0);
      const fields = {};
      for (const line of lines) {
        const field = line.split(',')[3];
        const name = line.split(',')[0];
        if (fields[field]) {
          fields[field] = [...fields[field], name];
        } else {
          fields[field] = [];
          fields[field].push(name);
        }
      }
      report.push(`Number of students: ${lines.length}`);
      for (const field of Object.keys(fields)) {
        report.push(
          `Number of students in ${field}: ${
            fields[field].length
          }. List: ${fields[field].join(', ')}`,
        );
      }
      resolve(report.join('\n'));
    });
  });
}

app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});

app.get('/students', async (req, res) => {
  let report = 'This is the list of our students';
  try {
    report = `${report}\n${await countStudents(FILE)}`;
    return res.send(report);
  } catch (error) {
    report = `${report}\n${error.message}`;
    return res.send(report);
  }
});

app.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});

module.exports = app;
