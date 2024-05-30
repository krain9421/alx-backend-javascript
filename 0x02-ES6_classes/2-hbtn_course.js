export default class HolbertonCourse {
  constructor(name, length, students) {
    if (typeof name !== 'string') {
      throw new TypeError('Name must be a string.');
    }
    if (typeof length !== 'number') {
      throw new TypeError('Length must be a number.');
    }
    if (typeof students !== 'object') {
      throw new TypeError('Students must be an array of strings.');
    }
    for (const student of students) {
      if (typeof student !== 'string') {
        throw new TypeError('Students must be an array of strings.');
      }
    }
    this._name = name;
    this._length = length;
    this._students = students;
  }

  // Getter
  get name() {
    return this._name;
  }

  // Setter
  set name(name) {
    if (typeof name !== 'string') {
      throw new TypeError('Name must be a string.');
    }
    this._name = (name);
  }

  // Getter
  get length() {
    return this._length;
  }

  // Setter
  set length(length) {
    if (typeof length !== 'number') {
      throw new TypeError('Length must be a number.');
    }
    this._length = Number(length);
  }

  // Getter
  get students() {
    return this._students;
  }

  // Setter
  set students(students) {
    if (typeof students !== 'object') {
      throw new TypeError('Students must be an array of strings');
    }
    for (const student of students) {
      if (typeof student !== 'string') {
        throw new TypeError('Students must be an array of strings');
      }
    }
    this._students = students;
  }
}
