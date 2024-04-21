const calcAverage = (sc1,sc2,sc3) => (sc1+sc2+sc3)/3;
const scoreDolphins = calcAverage(85,54,41);
const scoreKoalas = calcAverage(23,34,27);
console.log(scoreDolphins,scoreKoalas);
const checkWinner = function(avgDolphins, avgKoalas){
    if(avgDolphins >= avgKoalas*2){
        console.log(`Dolphins win 🏆 (${avgDolphins} vs. ${avgKoalas})`)
    }else if(avgKoalas >= avgDolphins*2){
        console.log(`Koalas win 🏆 (${avgKoalas} vs. ${avgDolphins})`)
    }else{
        console.log("No team win...")
    }
}
checkWinner(scoreDolphins,scoreKoalas);