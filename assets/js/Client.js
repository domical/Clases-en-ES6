export class Client {
  constructor(name, taxes) {
    this.name = name;
    this.taxes = taxes;
  }

  get name() {
    return this.name;
  }
  set name(newName){
    this._name=newName;
}

  calculateTax() {
    const { annualGrossSales, deductions } = this.taxes;
    return (annualGrossSales - deductions) * 0.21;
  }
}
