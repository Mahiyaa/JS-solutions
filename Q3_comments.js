/* changePossibilities(amount,amount): Your quirky boss collects rare, old coins. They found out you're a programmer and asked you to solve something they've been wondering for a long time. 

Write a function that, given an amount of money and an array of coin denominations, computes the number of ways to make the amount of money with coins of the available denominations. 

Example: for amount=4 (4¢) and denominations=[1,2,3] (1¢, 2¢ and 3¢), your program would output 4—the number of ways to make 4¢ with those denominations: 

1¢, 1¢, 1¢, 1¢
1¢, 1¢, 2¢
1¢, 3¢
2¢, 2¢ */

function changePossibilies(amount, coinsArr) {
  // initialize an array for the number of ways
  let possibilities = [];
  // [0,x,x,x,0,0,0,0,0,0]
  for (let i = 1; i <= amount; i++) {
      possibilities[i] = 0;
      // console.log(`POSSIBILITY AT ${i} IS ${possibilities[i]}`)        
  }
  // how many ways can we make 0 cents? 
  // there is only one way to make 0 cents -- by having nothing
  // initialize 0 to 1 for the first loop
  possibilities[0] = 1;
      
  // go through all of the coins one at a time
  coinsArr.forEach(function(coin){
      // test each value after you use at least one coin
      for (let j = coin; j <= amount; j++) {
          // can you make change from the remainder
          // after subtracting out another coin?
          let remainder = j - coin;
          // console.log(`Here j is ${j}, coin is ${coin}, and remainder is ${remainder}`)
          possibilities[j] += possibilities[remainder];
          // console.log(`Amount is ${possibilities[amount]}`)
      }
      // console.log(`Amount is ${possibilities[amount]}`)
  });
  // console.log(`FINAL amount is ${possibilities[amount]}`)
  return possibilities[amount]; // sum of all possibilities
} 

changePossibilies(4, [1,2,3]); //expected output 4
changePossibilies(3, [1,2]); //expected output 2
changePossibilies(10, [2,3,4]); //expected output 5