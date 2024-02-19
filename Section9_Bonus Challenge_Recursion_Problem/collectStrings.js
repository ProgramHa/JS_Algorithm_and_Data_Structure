// 객체를 받아 문자열에 해당하는 모든 값의 배열을 반환하는 함수 작성

function collectStrings() {
    
}

const obj = {
    stuff: "foo",
    data: {
        val: {
            thing: {
                info: "bar",
                moreInfo: {
                    evenMoreInfo: {
                        weMadeIt: "baz"
                    }
                }
            }
        }
    }
}

collectStrings(obj) // ["foo", "bar", "baz"])