'use strict';
const accounts = {
  owner:'Linh',
  movements:[200, 300, 120, 260],
  get latest() {
    return this.movements.slice(-1).pop();
  },

  set latest(mov) {
    this.movements.push(mov);
  }
}
console.log(accounts.latest);

accounts.latest = 60;
console.log(accounts.movements);
/*----------------------------------------------------------------------------*/

class PersonCL {
  constructor(fullName, birthYear) {
    this.fullName = fullName;
    this.birthYear = birthYear;
  }
  get age(){
    return 2100 - this.birthYear;
  }

  //set a property that already exists
  set fullName(name) {
    if(name.includes(' '))
      this._fullName = name;
    else
      alert(`${name} is not a full name !`)
  }
  get fullName(){
    return this._fullName;
  }
}
const michael = new PersonCL('Michael Faraday', 2000);
console.log(`michael's age is: ${michael.age}`);

const john = new PersonCL('John', 1930);