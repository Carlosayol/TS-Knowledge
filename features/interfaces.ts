const oldCivic = {
    name: 'Civic',
    year: 2000,
    broken: true
}

const printVehicle = (vehicle: {name: string; year: number; broken: boolean}): void => {
    console.log(vehicle.name);
    console.log(vehicle.year);
    console.log(vehicle.broken);
}

printVehicle(oldCivic);