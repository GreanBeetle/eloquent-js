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
console.log('sum of range 55, 59', sum(range(55,99)))

const reverseArray = arr => {
  let a = []
  for (let i = arr.length - 1; i >= 0; i -= 1) a.push(arr[i])
  return a
}
console.log('range 10, 100, step 2', range(10, 100, 2))
console.log('reverse array', reverseArray(range(10, 100, 2)))

const listArray = [1, 2, 3]
const arrayToList = arr => {
  let list = {}
  for (let a of arr) {
    list.value = a 
    arr.shift()
    list.rest = arr.length > 0 ? arrayToList(arr) : null 
  }
  return list 
}
console.log('array to list', arrayToList(listArray))

const arrayList = { value: 1, rest: { value: 2, rest: { value: 3, rest: { value: 4, rest: { value: 5, rest: null } } } } }
const emptyArr = []
const listToArray = (obj, arr) => {
  arr.push(obj.value)
  obj = obj.rest
  if (obj.rest === null) arr.push(obj.value)
  else listToArray(obj, arr)
  return arr
}
console.log('list to array', listToArray(arrayList, emptyArr))