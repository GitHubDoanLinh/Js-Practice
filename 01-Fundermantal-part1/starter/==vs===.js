const age = 18;
if(age === 18) console.log("ban da du tuoi xem phim 18+ 😁");

const newage = "17";
if(newage == "17"){
    console.log("ban chua du tuoi xem phim 18+ 😒")
}

const new2age = "15";
if(new2age === 15){
    console.log("ban ko phair hoc sinh cap 3")
}else{
    console.log("ban da la hoc sinh cap 3!")
}

const favouriteNum = prompt("con so yeu thich cua ban la ?");
console.log(favouriteNum); 
console.log(typeof favouriteNum); // String
if(favouriteNum === 26){
    console.log("26 la so ko dep :^<")
}else if(favouriteNum === 20){
    console.log("20 la mot so dep!")
}else if(favouriteNum === 3){
    console.log("3 la mot so dep")
}else{
    console.log("are you understand ?")
}