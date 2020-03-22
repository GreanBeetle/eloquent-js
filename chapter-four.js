const range = (start, end, step) => {
  let arr = []
  let counter = start
  while ( counter <= end ) {
    arr.push(counter)
    counter = step ? counter + step : counter + 1 
  } 
  return arr
}
console.log('range 1, 10', range(1, 10))
console.log('range 55, 99', range(55, 99))
console.log('range 1, 10, step 2', range(1, 10, 2))
console.log('range 847, 1046, step 8', range(847, 1046, 8))

const sum = arr => {
  let sum = 0
  for (let a of arr ) {
    if (a === arr[0]) sum = a 
    else sum = sum + a
  }
  return sum 
}
// console.log('sum of range 1, 10', sum(range(1,10)))
// console.log('sum of range sum', (range(55,99)))