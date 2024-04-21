const jonas = {
    firstName:'Jonas',
    lastName:'Thung',
    birthYear:1990,
    job:'teacher',
    friends:['Michael','Peter','Steven'],
    hasDriversLicense: true,
    // calcAge : function(birthYear){
    //     return 2037 - birthYear;
    // }
    // calcAge:function(){
    //     console.log(this);
    //     return 2037 - this.birthYear;
    // }
    calcAge: function(){
        this.age = 2037-this.birthYear;
        return this.age;
    },
    getSummary: function(){
        return `${this.firstName} is a ${this.calcAge()} years old 
        ${this.job}, and he has ${this.hasDriversLicense ? 'a' : 'no'} driver's liences`
    }
};

console.log(jonas.calcAge());
console.log(jonas.getSummary());
