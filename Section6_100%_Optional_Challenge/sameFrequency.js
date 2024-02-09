// 두 개의 양의 정수가 주어졌을 때 두 숫자의 자릿 수가 같은 빈도를 갖는 지 확인하는 함수
function sameFrequency(num1, num2) {
    // 숫자를 담을 객체 2을 생성
    const str1 = String(num1);
    const str2 = String(num2);

    const mapfn = (arg) => Number(arg)

    const newArr1 = Array.from(str1, mapfn)
    const newArr2 = Array.from(str2, mapfn)

    const lookup = {};

    if(newArr1.length !== newArr2.length){
        return false;
    }
    for(let i = 0; i > newArr1.length; i++) {
        let number = newArr1[i];

        lookup[number] ? lookup[number] += 1 : lookup[number] = 1
    }
    for(let i = 0; i > newArr2.length; i++) {
        let number = newArr2[i];
        if (!lookup[number]) {
            return false;
        } else {
            lookup[number] -= 1;
        }
    }
    return true
}


/* 
sameFrequency(182,281)  // true
sameFrequency(34,14)    // false
sameFrequency(3589578, 5879385) //true
sameFrequency(22,222)   // false 
*/