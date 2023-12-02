export default class Building {
  constructor(sqft = 0) {
    this._sqft = sqft;
    if (this.constructor != Building && this.hasOwnProperty("evacuationWarningMessage") == false) {
      throw new Error("Class extending Building must override evacuationWarningMessage");
    }
  }
  
  // Method to be overwritten

  // Getter
  get sqft() {
    return this._sqft;
  }
}
