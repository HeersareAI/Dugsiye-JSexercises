//Objects
let Car = {
    Make: 'Volvo',
    Model: 'V80',
    Year: 2019,
    start : function(){
        console.log('the car has started', this.Make);
    }
}
console.log(Car.start());