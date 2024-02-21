// 긴 문자열과 짧은 문자열을 인수로 받아 일치하는 문자열의 count로 반환하는 함수 작성

function stringSearch(str1, str2) {

    let count = 0;
    let chk = 0;

    for(var i = 0; i < str1.length; i++) {
        for(var j = 0; j < str2.length; j++) {
            if(str1[i+j] === str2[j]) {
                chk = j;
                continue;
            }
            if(str1[i] !== str2[j]) break;
        }
        if(chk+1 === str2.length) {
            count +=1;
            chk = 0;
        }
    }

    return count;
}