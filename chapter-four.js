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

console.log('************************************')
console.log('************************************')

const sum = arr => {
  let sum
  for (let a of arr) sum = a === arr[0] ? a : sum + a   
  return sum 
}
console.log('sum of range 1, 10', sum(range(1,10)))
console.log('sum of range 55, 59', sum(range(55,99)))

console.log('************************************')
console.log('************************************')

const reverseArray = arr => {
  let a = []
  for (let i = arr.length - 1; i >= 0; i -= 1) a.push(arr[i])
  return a
}
console.log('range 10, 100, step 2', range(10, 100, 2))
console.log('reverse array', reverseArray(range(10, 100, 2)))

console.log('************************************')
console.log('************************************')

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

console.log('************************************')
console.log('************************************')

const arrayList = { value: 1, rest: { value: 2, rest: { value: 3, rest: null } } }
const listToArray = (obj, arr = []) => {
  arr.push(obj.value)
  obj = obj.rest
  if (obj.rest === null) arr.push(obj.value)
  else listToArray(obj, arr)
  return arr
}
console.log('list to array', listToArray(arrayList))

console.log('************************************')
console.log('************************************')

const element = 'x'
const listToArrayWithPrepend = (list, element) => {
  if (list.rest !== null) list = { a: element, value: list.value, rest: listToArrayWithPrepend(list.rest, element)}
  else list = { a: element, value: list.value, rest: null }   
  return list 
}
console.log('list to array with prepend', listToArrayWithPrepend(arrayList, element))

console.log('************************************')
console.log('************************************')

const nthList = { value: 4, rest: { 
    value: 8, rest: { 
      value: 12, rest: {
        value: 16, rest: {
          value: 20, rest: null
        }
      } 
    } 
  } 
}
const nthNum = 4
const nth = (list, num, count = 1) => {
  let result 
  if (count !== num) result = nth(list.rest, num, count + 1)
  else if (count === num) result = list.value 
  else console.log('something went wrong in the nth function')
  return result
}
console.log('nth', nth(nthList, nthNum))

console.log('************************************')
console.log('************************************')

var objA = { here: { is: "an" }, object: 2 }
const deepEqual = (x, y) => {
  const isObject = value => typeof value === 'object'
  if (x === y) 
    return true
  else if ((x === null && y !== null) || (y === null && x !== null)) 
    return false 
  else {
    if (isObject(x) && isObject(y)) {
      let result = true
      const xKeys = Object.keys(x)
      const yKeys = Object.keys(y)
      if (xKeys.length !== yKeys.length) return false 
      for (let i = 0; i < xKeys.length; i++) {
        if (!result) return false
        const xValue = x[xKeys[i]]
        const yValue = y[yKeys[i]]
        if (isObject(xValue) && isObject(yValue)) result = deepEqual(xValue, yValue)
        else result = xValue === yValue  
      }
      return result 
    } else {
      return false             
    } 
  }
}
console.log(deepEqual(null, null)) // -> true 
console.log(deepEqual(objA, objA)) // -> true 
console.log(deepEqual(objA, { here: 1, object: 2 })) // -> false
console.log(deepEqual(objA, { here: { is: "an" }, object: 2 })) // -> true
console.log(deepEqual(nthList, { value: 4, rest: { value: 8, rest: { value: 12, rest: { value: 16, rest: { value: 20, rest: null } } } } })) // -> true
console.log(deepEqual(nthList, { value: 4, rest: { value: 8, rest: { value: 12, rest: { value: 16, rest: { value: 20, rest: 87 } } } } })) // -> false

