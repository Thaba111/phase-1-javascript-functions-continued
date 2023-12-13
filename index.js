// code your solution here
// 1. Implement saturdayFun function
function saturdayFun(activity = "roller-skate") {
    return `This Saturday, I want to ${activity}!`;
  }
  
  // 2. Implement mondayWork function
  function mondayWork(activity = "go to the office") {
    return `This Monday, I will ${activity}.`;
  }
  
  // 3. Implement wrapAdjective function
  function wrapAdjective(flair = "*") {
    // This "inner" function takes a single parameter (default to "special")
    return function(adjective = "special") {
      // Return a String of the form "You are ..." with the adjective wrapped in visual flair
      return `You are ${flair}${adjective}${flair}!`;
    };
  }
  
  // Call examples
  const encouragingPromptFunction = wrapAdjective("!!!");
  console.log(encouragingPromptFunction("amazing")); //=> "You are !!!amazing!!!"
  
  console.log(wrapAdjective("%")("a dedicated programmer")); //=> "You are %a dedicated programmer%!"
  