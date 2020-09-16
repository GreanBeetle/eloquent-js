const testObj = {
  a: 7,
  b: 5,
  c: 6, 
  d: 2,
  e: 1, 
  f: 3,
  g: 4
}

/**
 * this is for testObj, sorts by the numeric value of its properties 
 * @param {object} obj
 * @return {object} returns the input object, sorted by the value of  
 */
const sortObjectByPropertyValue = obj => {
  const sorted = Object.entries(obj).sort( (a, b) => a[1] - b[1] ) 
  console.log('sorted', sorted) // -> [ [e, 1], [d, 2], [f, 3], [g, 4], [b: 5], [c: 6], [a: 7]]
  const returnObject = Object.fromEntries(sorted) // -> {e: 1, d: 2, f: 3, g: 4, b: 5, c: 6, a: 7} 
  console.log('returnObject', returnObject)  
  return returnObject
}
console.log('testObj',sortObjectByPropertyValue(testObj)) // -> {e: 1, d: 2, f: 3, g: 4, b: 5, c: 6, a: 7}

/**
 * refactored version of the code above  
 */
const sortObj = obj => Object.fromEntries(Object.entries(obj).sort( (a, b) => a[1] - b[1]))
console.log('refactored version of sort object', sortObj(testObj)) // -> {e: 1, d: 2, f: 3, g: 4, b: 5, c: 6, a: 7}

const testObjA = {
  entry: {
    name: 'abner',
    score: 1
  },
  entry1: {
    name: 'abner',
    score: 2
  },
  entry2: {
    name: 'abner',
    score: 3
  },
  entry3: {
    name: 'julia',
    score: 3
  },
  entry4: {
    name: 'julia',
    score: 7
  },
  entry5: {
    name: 'wallace',
    score: 5
  },
  entry6: {
    name: 'wallace',
    score: 9
  }
}

/** 
 * return name of player who has the highest total score (wallace has one score of 5 and one of 9, so his total is 14, ergo this function should return 'wallace')
 */

 const getHighScore = obj => {
   let arr = []
   for (let o in obj) console.log('o is', o)
   console.log('arr', arr)
 }
console.log('get high score', getHighScore(testObjA)) // -> 