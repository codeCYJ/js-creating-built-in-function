const arr = [1,2,3,4,5];
const arr2 = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];

// 웹 브라우저 콘솔에서 사용하기위해 화살표함수가아닌 Array.prototype 와 함수형선언을 하였음.

Array.prototype.map2 = function(callback) {
  const newArray = [];
  for(let i = 0; i < this.length; i++){
    const callbackItem = callback(this[i], i);
    newArray.push(callbackItem);
  }
  return newArray;
}

Array.prototype.filter2 = function(callback) {
  const newArray = [];
  for(let i = 0; i < this.length; i++){
    const result = callback(this[i], i);
    if (result){
      newArray.push(this[i]);
    }
  }
  return newArray;
}

Array.prototype.reduce2 = function(callback) {
  let result = 0;
  for(let i = 0; i < this.length; i++){
    result = callback(result, this[i]);
  }
  return result;
}

console.log(
  arr.map2((e,i)=>e+i)
)
console.log(
  arr2.filter2((e,i)=>e.length > 6)
)
console.log(
  arr.reduce2((prev,curr)=>prev+curr)
)