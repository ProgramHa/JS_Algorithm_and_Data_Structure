// 문자열을 받아 모든 고유 문자가 포함된 가장 긴 하위 문자열의 길이를 반환하는 함수 작성

function findLongestSubstring(str) {
    let subString = '';
    let tmpChar = '';

    for(let i = 0; i < str.length; i++){
        tmpChar = str[i];

        if(subString.indexOf(tmpChar) == -1) {
            subString += tmpChar;
        }
    }
    return subString.length;
}

/*
findLongestSubstring('') // 0
findLongestSubstring('rithmschool') // 7
findLongestSubstring('thisisawesome') // 6
findLongestSubstring('thecatinthehat') // 7
findLongestSubstring('bbbbbb') // 1
findLongestSubstring('longestsubstring') // 8
findLongestSubstring('thisishowwedoit') // 6
*/