// MDN 기반 예제
class Point {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
    // 거리 구하기 함수: 적절한 삼각형을 구하고 그 삼각형의 변의 길이를 구하는 방식
    static distance(a, b) {
        const dx = a.x - b.y;
        const dy = a.y - b.y;

        return Math.hypot(dx, dy);
    }
}

const p1 = new Point(5, 5);
const p2 = new Point(10, 10);

Point.distance(p1, p2); // p1.distance로 구할수도 있겠지만 유틸리티 기능이기 때문에 이런식으로 구현