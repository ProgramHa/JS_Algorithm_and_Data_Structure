// 숫자의 배열을 받아 모든 숫자의 곱을 반환하는 함수 작성

function productOfArray(arr) {
    let result = 0;

    function helper(helperInput) {
        if(helperInput.length === 0){
            return;
        }
        else {
            if(result === 0) result = helperInput[0];
            else result *= helperInput[0];
        }
        helper(helperInput.slice(1))
    }

    helper(arr);

    return result;
}

// productOfArray([1,2,3]) // 6
// productOfArray([1,2,3,10]) // 10