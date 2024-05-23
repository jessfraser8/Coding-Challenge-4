//U09226075
//Create Car class.
class Car {
    constructor(make, speed){
        this.make = make;
        this.speed = speed;
        console.log(`The car is a ${make} driving ${speed} km/h.`);
    }

//Add acceleration method that increases the speed by 10 km/h.
    accelerate(){
        this.speed = this.speed + 10;
        console.log(`The new speed is ${this.speed} km/h.`);
        return this.speed;
    }

//Add brake method that decreases the speed by 5 km/h.
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

//Update accelerate model to increase speed by 20 and decrease charge by 1.
    accelerate() {
        if (this.charge > 1) {
            this.speed = this.speed + 20;
            this.charge = this.charge - 1;
            console.log(`${this.make} going ${this.speed} km/h, with a charge of ${this.charge}%.`);
        } else {
            console.log("Battery dead! Please charge before accelerating.");
        }
        return this.speed & this.charge;
    }
}