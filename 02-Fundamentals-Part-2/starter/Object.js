const Alex = {
    firstName : 'Alex',
    lastName : 'Nguyen',
    age : 2080 - 2000,
    job : 'teacher',
    friends:['John', 'Michel','Linda']
}
console.log(Alex);
console.log(Alex.age);
const nameKey = 'Name';
console.log(Alex['first' + nameKey]);

// const interestedIn = prompt('what do you want to know about Alex? Choose between firstName, lastName, age, job, and friends')
// if(Alex[interestedIn]){
//     console.log(Alex[interestedIn]);
// }else{
//     console.log('wrong request! Choose between firstName, lastName, age, job, and friends')
// }
Alex.location = 'Germani';
Alex['twitter'] = '@alexpro';
console.log(Alex); 

console.log(`${Alex.firstName} has ${Alex.friends.length} friends and his best friend called ${Alex.friends[2]}`)
