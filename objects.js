const testObjA = {
  entry: { 
    name: 'abner', 
    score: 1 
  }, 
  entry: {
    name: 'abner',
    score: 2 
  }, 
  entry: {
    name: 'abner', 

    score: 3
  }, 
  entry: {
    name: 'julia',
    score: 3
  },
  entry: {
    name: 'julia',
    score: 7
  }, 
  entry: {
    name: 'wallace',
    score: 5
  },
  entry: {
    name: 'wallace',
    score: 9
  }
}

const testObjB = {
  a: 7,
  b: 5,
  c: 6, 
  d: 2,
  e: 1, 
  f: 3,
  g: 4
}

/**
 * this is for testObjB, sorts by the numeric value of its properties 
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
console.log('testObjB',sortObjectByPropertyValue(testObjB)) // -> {e: 1, d: 2, f: 3, g: 4, b: 5, c: 6, a: 7}

/**
 * refactored version of the code above 
 * @param {object} obj 
 */
const sortObj = obj => Object.fromEntries(Object.entries(obj).sort( (a, b) => a[1] - b[1]))
console.log('refactored version of sort object', sortObj(testObjB)) // -> {e: 1, d: 2, f: 3, g: 4, b: 5, c: 6, a: 7}