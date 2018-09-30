module.exports = function check(str, bracketsConfig) {
  let input = str.split('');
  let countTypes = bracketsConfig.length;
  let closingBracket;
  let count = input.length;
  
  for(let indexOpen = 0; indexOpen < count; indexOpen++){
    if(input[indexOpen]){
      closingBracket = getClosingBracket(input[indexOpen]);
      let tagFound = false;
      for(let indexClose = indexOpen + 1; indexClose < count; indexClose += 2){
        if(input[indexClose] == closingBracket){          
          delete input[indexClose];
          delete input[indexOpen];
          tagFound = true;
          break;
        }
      }
      if(tagFound == false)
        return false;
    }
  }
  return true;

  function getClosingBracket (openBracket) {
    if(countTypes == 1){
      return bracketsConfig[0][1];
    }else{
      for(let arrI = 0; arrI < countTypes; arrI++){
        if(bracketsConfig[arrI][0] == openBracket)
        return bracketsConfig[arrI][1];
      }
    }
  }
}
