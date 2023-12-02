export default class Building {
  constructor(sqft = 0) {
    this._sqft = sqft;
    if (this.constructor !== Building) {
      this.evacuationWarningMessage();
    }
  }
 
  // Method to be overwritten
  evacuationWarningMessage() {
    throw new Error('Class extending Building must override evacuationWarningMessage');
  }

  // Getter
  get sqft() {
    return this._sqft;
  }
}
