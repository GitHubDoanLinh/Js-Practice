const v1 = true;
const v2 = true;
console.log(v1&&v2);

const v3 = true;
const v4 = false;
console.log(v3 && v4);
console.log(v3 || v4);

console.log(!v3);
if(v3 && v4){
    console.log("here is'nt happen!!!")
}else{
    console.log("false && false => fasle, vi vay else duoc thuc thi !!!")
}