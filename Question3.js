/* changePossibilities(amount,amount): Your quirky boss collects rare, old coins. They found out you're a programmer and asked you to solve something they've been wondering for a long time. 

Write a function that, given an amount of money and an array of coin denominations, computes the number of ways to make the amount of money with coins of the available denominations. 

Example: for amount=4 (4¢) and denominations=[1,2,3] (1¢, 2¢ and 3¢), your program would output 4—the number of ways to make 4¢ with those denominations: 

1¢, 1¢, 1¢, 1¢
1¢, 1¢, 2¢
1¢, 3¢
2¢, 2¢ */

function changePossibilies(amount, coinsArr) {
  let possibilities = [];
  for (let i = 1; i <= amount; i++) {
      possibilities[i] = 0;       
  }
  possibilities[0] = 1;

  coinsArr.forEach(function(coin){
      for (let j = coin; j <= amount; j++) {
          let remainder = j - coin;
          possibilities[j] += possibilities[remainder];
      }
  });

  return possibilities[amount]; 
} 

changePossibilies(4, [1,2,3]); //expected output 4
changePossibilies(3, [1,2]); //expected output 2
changePossibilies(10, [2,3,4]); //expected output 5