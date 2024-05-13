'use strict';
const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    ['Neuer', 'Pavard', 'Sule', 'Hernandez', 'Davies', 'Kimmich', 'Goretzka', 'Muller', 'Gnabry', 'Lewandowski', 'Coman'],
    ['Oblak', 'Trippier', 'Gimenez', 'Savic', 'Lodi', 'Koke', 'Llorente', 'Herrera', 'Carrasco', 'Felix', 'Suarez']
  ],
  score: '3:0',
  scored: ['Muller', 'Gnabry', 'Lewandowski'],
  date: 'Dec 9th - 2023',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5
  }
};
const [player1, player2] = game.players;
console.log(player1, player2);
const [gk, ...fieldPlayers] = player1;
const allPlayers = [...player1, ...player2];
const players1Final = [...player1, 'Thiago', 'Coutinho', 'Perisic'];
const {
  odds: { team1, x: draw, team2 }
} = game;
const printGoals = function(...players) {
  console.log(`${players.length} goals were scored!`);
  players.forEach(player => console.log(player));
};
printGoals('Davies', 'Kimmich', 'Goretzka');
printGoals(...game.scored);
team1 < team2 && console.log('Team1 will win 🏆!');
team1 > team2 && console.log('Team2 will win 🏆!');