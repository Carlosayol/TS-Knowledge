class Vehicle {
    // color: string;

    // constructor(color: string) {
    //     this.color = color;
    // }


    // alternative to create a constructor

    constructor(public color: string) {}

    public drive(): void {
        console.log("Brrr brrr");
    }
    
    protected honk(): void {
        console.log("honk honk");
    }
}

class Car extends Vehicle {
    // color attribute is inherited from Vehicle, thus is not needed to be specified as public
    constructor(public wheels: number, color: string) {
        super(color);
    }

    private brake(): void {
        console.log("Sqeee");
    }

    public avoidAccident(): void {
        this.brake();
        this.honk();
    }
}

const car = new Car(4, "blue");

car.drive()
car.avoidAccident()