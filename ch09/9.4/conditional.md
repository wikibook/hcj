## 9.4.	제어 흐름 (조건문, 반복문)
### 9.4.2.	if, else if, else 문
```javascript
// 예제 9.14 if 문을 사용해 날씨에 따른 옷 추천하기
let temperature = 28;

if (temperature >= 25) {
  console.log("반팔 옷을 추천해요.");
}

// [출력 결과]
// 반팔 옷을 추천해요.
```

```javascript
// 예제 9.15 else if와 else를 사용해 날씨에 따른 옷 추천하기
let temperature = 12;

if (temperature >= 25) {
  console.log("반팔 옷을 추천해요.");
} else if (temperature >= 15 && temperature < 25) {
  console.log("가벼운 긴팔이나 얇은 옷을 추천해요.");
} else if (temperature >= 5 && temperature < 15) {
  console.log("자켓이나 가디건을 추천해요.");
} else {
  console.log("두꺼운 코트나 패딩을 추천해요.");
}

// [출력 결과]
// 자켓이나 가디건을 추천해요.
```

### 9.4.3.	삼항 연산자
```javascript
// 예제 9.16 삼항 연산자로 오전과 오후 구분하기
let hours = 14;
let period = hours < 12 ? '오전' : '오후';

console.log(`지금은 ${period}`);

// [출력 결과]
// 지금은 오후
```

### 9.4.4.	switch 문
```javascript
// 예제 9.17 switch 문을 사용해 신호등 만들기
let light = "초록";

switch (light) {
  case "빨강":
    console.log("멈추세요.");
    break;
  case "초록":
    console.log("건너도 됩니다.");
    break;
  default:
    console.log("신호 대기 중입니다.");
}

// [출력 결과]
// 건너도 됩니다.
```

### 9.4.6.	for 문
```javascript
// 예제 9.18 for 문을 사용해 숫자 하나씩 출력하기
for (let i = 0; i < 5; i++) {
  console.log(i + "번째");
}
console.log("끝!");

// [출력 결과]
// 0번째
// 1번째
// 2번째
// 3번째
// 4번째
// 끝!
```

```javascript
// 예제 9.19 length를 사용해 배열의 각 요소 조회하기
let num_list = [1, 2, 3, 4, 5];
for (let i = 0; i < num_list.length; i++) {
  num_list[i] *= 2 // num_list[i] = num_list[i] * 2 와 동일
}
console.log(num_list);

// [출력 결과]
// [2, 4, 6, 8, 10]
```
### 9.4.7.	for...of
```javascript
// 예제 9.20 for…of 문을 사용해 배열 내 요소 출력하기
let num_list = [1, 2, 3, 4, 5];
for (let num of num_list) {
num = num * 2;
  console.log(num);
}
console.log(num_list);

// [출력 결과]
// 2
// 4
// 6
// 8
// 10
// [1, 2, 3, 4, 5]
```

### 9.4.8.	while 문
```javascript
// 예제 9.21 while 문을 사용해 비밀번호 맞추기
const correctPassword = '1234';
let inputPassword = '5678';

while (inputPassword !== correctPassword) {
    inputPassword = prompt('비밀번호를 입력하세요');
}

alert('로그인 성공!');
```

### 9.4.9.	do...while 문
```javascript
// 예제 9.22 do...while 문을 사용해 예제 9.21 수정하기
const correctPassword = '1234';
let inputPassword;

do {
    inputPassword = prompt('비밀번호를 입력하세요');
} while (inputPassword !== correctPassword);

alert('로그인 성공!');
```
