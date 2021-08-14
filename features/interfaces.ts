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

const printSummary = (item: Reportable): void => {
    console.log(item.summary());
}

printSummary(oldCivic);