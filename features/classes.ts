class Vehicle {
    drive(): void {
        console.log("brum brum");
    }
    
    honk(): void {
        console.log("honk honk");
    }
}

const vehicle = new Vehicle()

vehicle.drive()
vehicle.honk()