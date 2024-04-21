const calcAge = function (birthYear) {
  return 2037 - birthYear;
};
const age = calcAge(1990);
console.log(age);

// Arrow function
const calcAge2 = (birthYear) => 2037 - birthYear;
const age2 = calcAge2(1980);
console.log(age2);

const calcAge3 = (birthYear2, birthYear3) => 2041 - birthYear2 - birthYear3;
const age3 = calcAge3(1980, 1);
console.log(age3);

const yearUntilRetirement = (birthYear4) => {
  const age4 = 2037 - birthYear4;
  const retirement = 65 - age4;
  return retirement;
};
console.log(yearUntilRetirement(1991));

const yearUntilRetirement2 = (birthYear5, firstName) => {
  const age5 = 2037 - birthYear5;
  const retirement2 = 65 - age5;
  return `${firstName} retires in ${retirement2} years`;
};
console.log(yearUntilRetirement2(1990, "John"));
