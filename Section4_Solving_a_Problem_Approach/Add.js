function charCount(str){
    // 마지막에 반환할 객체 만들기
    var result = {};
    // 문자열에 각 문자열에 대한 루프 적용하기
    for(var i = 0; i < str.length; i++) {
      var char = str[i]
      // 만약 char가 숫자/문자이며 객체에 있다면, 하나를 갯수에 더함
      if(result[char] > 0){
         result[char]++;
      }
      // char가 숫자/문자이며 객체에 없다면, 추가하고 값을 1로 설정
      else {
        result[char] = 1;
      };
    }
      // 만약 문자가 다른 것(공백, 온점, 기타...)이면 아무것도 하지 않음
    // 객체 반환하기
    return result;
}