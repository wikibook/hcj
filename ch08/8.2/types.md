## 8.1.2.	변수 만들기
### 8.2.1.	숫자
```javascript
let age = 25;
console.log(typeof age);
// number

let height = 168.5;
console.log(typeof height);
// number
```

### 8.2.2.	문자열
```javascript
let product = "사과";
let price = '2000';
let color = `red`;

// 문자열과 변수 합치기
console.log("오늘 " + product + " 값은 " + price + "원 입니다!");
// 템플릿 리터럴
console.log(`오늘 ${product} 값은 ${price}원 입니다!`);
```

### 8.2.3.	불리언
```javascript
let isAdult = true;
let isStudent = false;
```

### 8.2.4.	null과 undefined
```javascript
let none = null; // null

let nothing;
console.log(nothing); // undefined
```

### 8.2.5.	객체
```javascript
let apple = {
  color: "red",
  weight: 150,
  price: 3000
};

// 예제 8.3 객체의 값 가져오기
console.log(apple.color);    // 점 표기법, "red" 출력
console.log(apple["weight"]); // 대괄호 표기법, 150 출력

// 예제 8.4 객체의 값을 추가, 수정하기
apple.origin = "충주"; // 값 추가
apple.price = 2800; // 값 수정

console.log(apple);
// {color: "red", weight: 150, price: 2800, origin: "충주"}

// 예제 8.5 delete 키워드를 사용해 객체의 키 삭제하기
delete apple.origin;

console.log(apple);
// {color: "red", weight: 150, price: 2800}
```

### 8.2.6.	배열
```javascript
let products = ["사과", "고등어", "배추"];

// 예제 8.6 인덱스를 사용해 배열의 값에 접근하기
console.log(products[0]); // "사과"
console.log(products[2]); // "배추"

// 예제 8.7 배열 수정하기
products[1] = "연어";  // "고등어"를 "연어"로 변경

// 예제 8.8 push(), pop() 메서드 사용하기
products.push("딸기");
console.log(products); // ["사과", "연어", "배추", "딸기"]

products.pop();
console.log(products); // ["사과", "연어", "배추"]

// 예제 8.9 unshift(), shift() 메서드 사용하기
products.unshift("고구마");
console.log(products); // ["고구마", "사과", "연어", "배추"]

products.shift();
console.log(products); // ["사과", "연어", "배추"]

// 예제 8.10 length 속성을 사용해 요소 개수 확인하기
console.log(products.length);  // 3
```
