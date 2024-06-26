const measureKelvin = function () {
  const measurement = {
    type: "temp",
    unit: "celsius",
    // value: prompt('Degrees celsius:')
    // value:Number(prompt('Degrees celsius:'))
    value: 10,
  };
  // console.log(measurement);
  console.table(measurement);
  // console.log(measurement.value);
  // console.warn(measurement.value);
  // console.error(measurement.value);
  const kelvin = measurement.value + 273;
  return kelvin;
};
console.log(measureKelvin());

//using a debuger
const calcTempAmplitudeBug = function (t1,t2) {
    const temps = t1.concat(t2);
    console.log(temps);
    let max = temps[0];
    let min = temps[0];
  
    for (let i = 0; i < temps.length; i++) {
      const curTemp = temps[i];
      if (typeof curTemp !== 'number') continue;

      if (curTemp > max) max = curTemp;
      if (curTemp < min) min = curTemp;
    }
    console.log(max, min);
    return max - min;
  };
  const amplitudeBug = calcTempAmplitudeBug([3,5,1],[9,4,5]);
  console.log(amplitudeBug);
