//U09226075
//Create Car class.
class Car {
    constructor(make, speed){
        this.make = make;
        this.speed = speed;
        console.log(`The car is a ${make} driving ${speed} km/h.`);
    }

//Add acceleration method.
    accelerate(){
        this.speed = this.speed + 10;
        console.log(`The new speed is ${this.speed} km/h.`);
        return this.speed;
    }

//Add brake method.
    brake(){
        this.speed = this.speed - 5;
        console.log(`The new speed is ${this.speed} km/h.`);
        return this.speed;
    }
}

//Create EV class.
class EV extends Car {
    constructor(make, speed, charge){
        super(make, speed);
        this.charge = charge;
    }

//Add charge battery method.
    chargeBattery(chargeTo){
        this.charge = chargeTo;
        console.log(`The new charge is ${this.charge}.`)
        return this.charge;
    }
}