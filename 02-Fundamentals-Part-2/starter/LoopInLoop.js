const jonas = [
    'Jonas',
    'Schmedtmann',
    2037 - 1991,
    'teacher',
    ['Michael', 'Peter', 'Steven'],
    true
  ];
  for(let i=jonas.length-1; i>=0; i--){
    console.log(jonas[i]);
  }

  for(let i=0; i<4;i++){
    console.log(`starting exercise ${i}`);
    for(let j=0;j<5;j++){
        console.log(`Exercise ${i}: Lifting weight repetition ${j} 🏋️`);
    }
  }