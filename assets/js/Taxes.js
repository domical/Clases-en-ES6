export class Taxes{
    constructor(annualGrossSales, deductions) {
    this._annualGrossSales = annualGrossSales;
    this._deductions = deductions;
    }

    get annualGrossSales() {
    return this._annualGrossSales;
    }

    set annualGrossSales(amount) {
    this._annualGrossSales = amount;
    }

    get deductions() {
    return this._deductions;
    }

    set deductions(amount) {
    this._deductions = amount;
    }
}

