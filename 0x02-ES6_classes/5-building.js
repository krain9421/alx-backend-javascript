export default abstract class Building {
  constructor(sqft) {
    this._sqft = sqft;
  }

  // Getter
  get sqft() {
    return this._sqft;
  }
