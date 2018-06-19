/* sortByStrings(s,t): Sort the letters in the 
string s by the order they occur in the 
string t. 
You can assume t will not have repetitive characters. 
For s = "weather" and t = "therapyw", the output should 
be sortByString(s, t) = "theeraw". For s = "good" 
and t "odg", the output should be s
ortByString(s, t) = "oodg". */

function sortByString(strToSort, sortBy){
  let arrToSort = strToSort.split("");
  let sortedArr = sortBy.split("");
  let resultArr = new Array;
  for (let i = 0; i < sortedArr.length; i++){
    for (let j = 0; j < arrToSort.length; j++){
      if (sortedArr[i] === arrToSort[j]){
        resultArr.push(arrToSort[j])
      }
    }
  }
  return resultArr.join("");
}

sortByString("weather", "therapyw");
sortByString("good", "odg");