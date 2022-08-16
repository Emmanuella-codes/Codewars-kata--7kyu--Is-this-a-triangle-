// all sides must be greater than 0
// it is made up of triangle of consecutive odd numbers
// the addition of 2 sides must be greater than the other

function isTriangle(a,b,c) {
  if (a === 0 || b === 0 || c === 0) return false
   return (a + b > c && a + c > b && b + c > a )
}
console.log(isTriangle(1, 2, 2));

