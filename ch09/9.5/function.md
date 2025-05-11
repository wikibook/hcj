## 9.5.	함수
### 9.5.1.	함수란?
```javascript
// 예제 9.23 배달 주문 함수 호출하기
function deliver() {
  console.log("떡볶이 배달 주문이 접수되었습니다!");
}
deliver();  
deliver();  

// [출력 결과]
// 떡볶이 배달 주문이 접수되었습니다!
// 떡볶이 배달 주문이 접수되었습니다!
```

### 9.5.2.	매개변수 사용하기
```javascript
// 예제 9.24 매개변수 활용하기
function deliver(menu) {
  console.log(`${menu} 배달 주문이 접수되었습니다!`);
}
deliver("피자");
deliver("족발");

// [출력 결과]
// 피자 배달 주문이 접수되었습니다!
// 족발 배달 주문이 접수되었습니다!
```

```javascript
// 예제 9.25 여러 매개변수 사용하기
function add(a, b) {
  console.log(a + b);
}
add(3, 5);
add(7, 9);

// [출력 결과]
// 8
// 16
```

### 9.5.3.	반환 값 활용하기
```javascript
// 예제 9.26 반환 값을 활용한 더하기 함수
function add(a, b) {
  return a + b;
}
const result = add(add(3, 5), add(7, 9))
console.log(result);

// [출력 결과]
// 24
```

### 9.5.4.	화살표 함수로 더 쉽게 표현하기
```javascript
// 예제 9.27 화살표 함수를 사용해 예제 9.24의 함수 수정하기
const deliver = (menu) => {
  return `${menu} 배달 주문이 접수되었습니다!`;
}
```

```javascript
// 예제 9.28 화살표 함수 축약형으로 수정하기
const deliver = menu => `${menu} 배달 주문이 접수되었습니다!`;
```
