import Building from './5-building.js';

export default class SkyHighBuilding extends Building {
  constructor(sqft, floors) {
    super(sqft)
    this._sqft = sqft;
    this._floors = floors;
  }

  // Getter
  get sqft() {
    return this._sqft;
  }

  get floors() {
    return this._floors;
  }

  // Setter
  set sqft(sqft) {
    this._sqft = sqft;
  }

  set floors(sqft) {
    this._floors = sqft;
  }

  evacuationWarningMessage() {
  return `Evacuate slowly the ${this._floors} floors`;
  }
}
