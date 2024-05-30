export default class Currency {
  constructor(code, name) {
    this._code = code;
    this._name = name;
  }

  // Getter
  get code() {
    return this._code;
  }

  // Setter
  set code(code) {
    this._code = code;
  }

  // Getter
  get name() {
    return this._name;
  }

  // Setter
  set name(name) {
    this._name = name;
  }

  displayFullCurrency() {
    return `${this._name} (${this._code})`;
  }
}
