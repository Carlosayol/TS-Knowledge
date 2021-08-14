interface Vehicle {
    name: string;
    year: number;
    broken: boolean;
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

const printVehicle = (vehicle: Vehicle): void => {
    console.log(vehicle.summary());
}

printVehicle(oldCivic);