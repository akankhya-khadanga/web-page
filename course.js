class ToyotaCar{
    constructor(brand,mileage){
        console.log("creating new project");
        this.brand=brand;
        this.mileage=mileage;
    }
    start(){
        console.log("start");
    }
    stop(){
        console.log("stop");
    }
    setBrand(brand){
        this.brand=brand;
    }
}

let fortuner=new ToyotaCar("fortuner",20);
console.log(fortuner);
let lexus=new ToyotaCar("lexus",10);
console.log(lexus);