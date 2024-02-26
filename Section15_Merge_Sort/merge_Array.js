function merge(arr1, arr2) {
    let results = [];
    let i = 0;
    let j = 0;

    while(i < arr1.length && j < arr2.length) {
        if(arr2[j] > arr1[i]) {                 // 이때 부등호의 방향은 상관없음( 부등호 방향에 따라 push 값 변경)
            results.push(arr1[i]);
            i++;
        }
        else {
            results.push(arr2[j])
            j++;
        }
    }

    while(i < arr1.length){
        results.push(arr1[i]);
        i++;
    }
    while(j < arr2.length){
        results.push(arr2[j]);
        j++;
    }

    return results;
}

merge([1,10,50], [2,14,99,100])