import Building from './5-building.js'

export default class SkyHighBuilding extends Building {
  constructor(sqft = super._sqft, floors) {
    this._sqft = sqft
    this._floors = floors
  }

  // Getters
  get sqft() {
    return (this._sqft);
  }

  get floors() {
    return (this._floors)
  }

  // Setters
  set sqft(sqft) {
    this._sqft = sqft;
  }

  set floors(floors) {
    this._floors = floors;
  }

  evacuationWarningMessage() {
    return ('Evacuate slowly the ${this.floors} floors');
  }
}
