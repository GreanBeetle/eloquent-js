const range = (start, end, step) => {
  let arr = []
  const negative = Math.sign(step) === -1 ? true : false
  let counter = negative ? end : start
  let iterate = true 
  while (iterate) {
    arr.push(counter)
    counter = step ? counter + step : counter + 1
    iterate = negative ? counter >= start : counter <= end 
  } 
  return arr
}
console.log('range 1, 10', range(1, 10))
console.log('range 55, 99', range(55, 99))
console.log('range 1, 10, step 2', range(1, 10, 2))
console.log('range 847, 1046, step 8', range(847, 1046, 8))
console.log('range 1, 10, -2', range(1, 10, -2))

const sum = arr => {
  let sum
  for (let a of arr) sum = a === arr[0] ? a : sum + a   
  return sum 
}
console.log('sum of range 1, 10', sum(range(1,10)))
console.log('sum of range sum', (range(55,99)))