class Vehicle {
    public drive(): void {
        console.log("Brrr brrr");
    }
    
    protected honk(): void {
        console.log("honk honk");
    }
}

class Car extends Vehicle {
    private brake(): void {
        console.log("Sqeee");
    }

    public avoidAccident(): void {
        this.brake();
        this.honk();
    }
}

const car = new Car()

car.drive()
car.avoidAccident()