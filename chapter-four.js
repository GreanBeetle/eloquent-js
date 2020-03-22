
const range = (start, end) => {
  const number = (end - start) + 1 
  let arr = []
  let count = start; 
  for (i = 1; i <= number; i++) {
    arr.push(count)
    count += 1; 
  }
  return arr
}

const arr = [2, 7, 19]
const sum = arr => {
  let sum = 0
  for (let a of arr ) {
    if (a === arr[0]) sum = a 
    else sum = sum + a
  }
  return sum 
}

console.log('range', range(1, 10))
console.log('sum', sum(arr))
console.log('sum of range', sum(range(1,10)))