class Vehicle {
    drive(): void {
        console.log("Brrr brrr");
    }
    
    honk(): void {
        console.log("honk honk");
    }
}

class Car extends Vehicle {
    drive(): void {
        console.log("Vroom vroom");
    }
}

const car = new Car()

car.drive()
car.honk()