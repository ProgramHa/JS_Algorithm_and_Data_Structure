// sameFrequncy 솔루션
function sameFrequency(num1, num2){
    let strNum1 = num1.toString();
    let strNum2 = num2.toString();
    if(strNum1.length !== strNum2.length) return false;
    
    let countNum1 = {};
    let countNum2 = {};
    
    for(let i = 0; i < strNum1.length; i++){
      countNum1[strNum1[i]] = (countNum1[strNum1[i]] || 0) + 1
    }
    
    for(let j = 0; j < strNum1.length; j++){
      countNum2[strNum2[j]] = (countNum2[strNum2[j]] || 0) + 1
    }
    
    for(let key in countNum1){
      if(countNum1[key] !== countNum2[key]) return false;
    }
   
    return true;
}

// areThereDuplicate 솔루션 (빈도수 세기)
function areThereDuplicates(arguments) {
    let collection = {}
    for(let val in arguments){
      collection[arguments[val]] = (collection[arguments[val]] || 0) + 1
    }
    for(let key in collection){
      if(collection[key] > 1) return true
    }
    return f
}

// areThereDuplicate 솔루션 (다중 포인터)
function areThereDuplicates(args) {
    // Two pointers
    args.sort((a,b) => a > b);
    let start = 0;
    let next = 1;
    while(next < args.length){
      if(args[start] === args[next]){
          return true
      }
      start++
      next++
    }
    return false
}

// areThereDuplicate One Liner 솔루션
function areThereDuplicates(arguments) {
    return new Set(arguments).size !== arguments.length;
}
/*
Set 함수는 중복되지 않는 유일한 값들의 집합

동일한 값을 중복하여 포함 불가

요소 순서 의미없음

인덱스로 요소 접근 불가능
*/
