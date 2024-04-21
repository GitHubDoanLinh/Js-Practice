const mark = {
    fullName: "Mark Miller",
    mass: 78,
    height: 1.69,
    calcBMI: function() {
        this.bmi = this.mass / (this.height ** 2);
        return this.bmi;
    }
};
const john = {
    fullName: 'John Smith',
    mass: 92,
    height: 1.95,
    calcBMI: function () {
      this.bmi = this.mass / this.height ** 2;
      return this.bmi;
    }
  };
mark.calcBMI();
john.calcBMI();
console.log(mark.calcBMI(),john.calcBMI());
if(mark.calcBMI()>john.calcBMI()){
    console.log(`chỉ số BMI của Mark ${mark.calcBMI()} cao hơn John ${john.calcBMI()}`)
}else if(mark.calcBMI()<john.calcBMI()){
    console.log(`chỉ số BMI của Mark ${mark.calcBMI()} thấp hơn John ${john.calcBMI()}`)
}else{
    console.log(`chỉ số BMI của Mark ${mark.calcBMI()} bằng John ${john.calcBMI()}`)
}