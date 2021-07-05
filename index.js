function saturdayFun(activity = "roller-skate") {
  return `This Saturday, I want to ${activity}!`
}

const mondayWork = function(activity = "go to the office") {
  return `This Monday, I will ${activity}.`
}

function wrapAdjective(flair = "*") {
  return function(phrase = "special") {
    return `You are ${flair}${phrase}${flair}!`
  }
}

const Calculator = {
  add: function(a,b){ return a + b },
  subtract: function(a,b){ return a - b },
  multiply: function(a,b){ return a * b },
  divide: function(a,b){ return a / b }
};

const actionApplyer = (startInt, funcArray) => {
  let a = startInt;
  for (let i = 0; i < funcArray.length; i++) {
    a = funcArray[i](a);
  }
  return a;
}