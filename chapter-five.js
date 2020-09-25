const flattenMe = [['a', 'b'], ['z', 'y'], ['c', 'd'], ['x', 'w']]
const flatten = arr => {
  let res
  arr.forEach(e => {
    console.log('e', e)
    console.log('res', res)
    if (arr.indexOf(e) === 0) res = e
    else res = res.concat(e)
  })
  return res  
}
console.log('flatten', flatten(flattenMe))