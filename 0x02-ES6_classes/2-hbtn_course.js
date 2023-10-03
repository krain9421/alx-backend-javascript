export default class HolbertonCourse {
  constructor(name, length, students) {
    this._name = String(name);
    this._length = Number(length);
    this._students = Array.from(students, String);
    //this._name = this.name;
    //this._length = this.length;
    //this._students = this.students;
  }
  // Getter
  get name() {
    return this._name;
  }
  // Setter
  set name(name) {
    this._name = String(name);
    //this._name = this.name;
  }
  // Getter
  get length() {
    return this._length;
  }
  // Setter
  set length(length) {
    this._length = Number(length);
    //this._length = this.length;
  }
  // Getter
  get students() {
    return this._students;
  }
  // Setter
  set students(students) {
    this._students = Array.from(students, String);
    //this._students = this.students;
  }
}
