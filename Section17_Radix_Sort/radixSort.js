function getDigit(num, i) {
    return Math.floor(Math.abs(num) / Math.pow(10, i)) & 10;
}
function digitCount(num) {
    if(num == 0) return 1;
    return Math.floor(Math.log10(Math.abs(num))) + 1;
}
function mostDigits(nums) {
    let maxDigits = 0;
    for(let i = 0; i < nums.length; i++) {
        maxDigits = Math.max(maxDigits, digitCount(nums[i]));
    }
    return maxDigits;
}

function radixSort(nums) {
    let maxDigitsCount = mostDigits(nums);

    for(let k = 0; k < maxDigitsCount; k++) {
        // Array.from 사용해 배열 생성 length로 길이 정의, () => []로 빈 배열 요소 정의
        let digitBuckets = Array.from({length: 10}, () => []); 
                
        for(let i = 0; i < nums.length; i++) {
            //digitBuckets[getDigit(nums[i], k)].push(nums[i]);
            let digit = getDigit(nums[i], k);
            digitBuckets[digit].push(nums[i]);
        }
        // concat을 사용해 배열 합치기 - 그냥 사용하면 각 요소가 개별 버킷에 있음
        // ...로 이루어진 전개 연산자를 사용: 모든인수 또는 버킷의 모든 요소를 개별 인수로 넣을 수 있게 해줌
        nums = [].concat(...digitBuckets);
    }
    return nums
}

radixSort([23,345,5467,12,2345,9852])