import Currency from './3-currency';

export default class Pricing {
  constructor(amount, currency) {
    this._amount = amount;
    this._currency = new Currency('currency_code', 'currency_name');
    this._currency = currency;
  }

  // Getter
  get amount() {
    return this._amount;
  }

  // Setter
  set amount(amount) {
    this._amount = amount;
  }

  // Getter
  get currency() {
    return this._currency;
  }

  // Setter
  set currency(currency) {
    this._currency = currency;
  }

  displayFullPrice() {
    return `${this._amount} ${this._currency._name} (${this._currency._code})`;
  }

  static convertPrice(amount, conversionRate) {
    return amount * conversionRate;
  }
}
