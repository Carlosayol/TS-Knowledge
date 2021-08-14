interface Reportable {
    summary(): string;
}

const oldCivic = {
    name: 'Civic',
    year: 2000,
    broken: true,
    summary(): string {
        return `Name: ${this.name} is broken? ${this.broken}`;
    }
}

const drink = {
    name: 'Water',
    sugar: 0,
    summary(): string {
        return `Drink: ${this.name} has ${this.sugar} grams of sugar`;
    }
}

const printSummary = (item: Reportable): void => {
    console.log(item.summary());
}

printSummary(oldCivic);
printSummary(drink);