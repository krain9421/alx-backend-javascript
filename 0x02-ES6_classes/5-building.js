export default abstract class Building {
  constructor(sqft) {
    if (!this.evacuationWarningMessage()) {
      throw new Error("Class extending Building must override evacuationWarningMessage");
    }
    this._sqft = sqft;
  }
  
  // Getter
  get sqft() {
    return this._sqft;
  }
