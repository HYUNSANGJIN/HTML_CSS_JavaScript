// 1. String concatenation(문자연결)
/*
    string literals 좋은점
    - 줄바꿈이 가능함
    - 중간에 특수기호('')를 이용해도 그대로 문자열로 변환되어서 나옴

    \n -> 줄바꿈
    \t -> 탭

*/
console.log("my" + "cat");
console.log("1" + 2);
console.log(`string literals: 1+ 2 = ${1 + 2}`);
console.log("jin's \nbook");
console.log("jin's \tbook");

// 2. Numeric operators(숫자 연산자)
console.log(1 + 1); //add
console.log(1 - 1); //substract
console.log(1 / 1); //divide
console.log(1 * 1); //multiply
console.log(5 % 2); //remainder
console.log(2 ** 3); //exponentiation -> 2의3승

// 3. Increment and decrement operators(++, -- )
let counter = 2;
const preIncrement = ++counter;
console.log(`preIncrement: ${preIncrement}, counter: ${counter}`);
// counter = counter + 1;
// preIncrement = counter;

const postIncrement = counter++;
console.log(`postIncrement: ${postIncrement}, counter: ${counter}`);
//postIncrement = counter;
// counter = counter + 1;

const preDecrement = --counter;
console.log(`preDecrement: ${preDecrement}, counter: ${counter}`);

const postDecrement = counter--;
console.log(`postDecrement: ${postDecrement}, counter: ${counter}`);

// 4. Assignment operators(=)
let x = 3;
let y = 6;
x += y; //x = x+y;
x -= y;
x *= y;
x /= y;

// 5. Comparison operators(<=)
console.log(10 < 6);
console.log(10 <= 6);
console.log(10 > 6);
console.log(10 >= 6);

// 6. Logical operators(||, &&, ! 논리 연산자)
/*
    || or
    && and
    ! not
*/
const value1 = true;
const value2 = 4 < 2;
// || or -> finds the first truthy value
// 처음으로 true가 나오면 멈춤!!! -> 앞에서 true가 나와버리면 게임 끝난걸로 간주하고 결과값이 true로 나옴
// 어지간하면 결과값이 true인 애를 맨 뒤로 넣기!!

// 결과값이 하나만 true여도 true임!!
console.log(`or : ${value1 || value2 || check()}`);

function check() {
  for (let i = 0; i < 10; i++) {
    //wasting time
    console.log("😱");
  }
  return true;
}

// && and -> finds the first falsy value
// 모든값이 다 true로 나와야 true임!!
// 얘도 or처럼 앞에서 flase가 나와버리면 뒤에 쳐다도 안보고 false로 간주함
console.log(`and : ${value1 && value2 && check()}`);
// and연산자는 null check할때도 많이 쓰임
// nullableObject && nullableObject.something
// if (nullableObject != null) {
//   nullableObject.something;
// }

function check() {
  for (let i = 0; i < 10; i++) {
    //wasting time
    console.log("😱");
  }
  return true;
}

// ! not
console.log(!value1);

// 7. Equality(==, ===)
const stringFive = "5";
const numberFive = 5;

// == loose equality, with type conversion
// ㄴ 타입을 변경해서 검사함(type만 같아도 됨)
console.log(stringFive == numberFive);
console.log(stringFive != numberFive);

// === strict equality, no type conversion
// ㄴ 타입을 신경써서 검사함 (type과 value가 모두 같아야함)
console.log(stringFive === numberFive);
console.log(stringFive !== numberFive);

// object equality by reference
const ellie1 = { name: "ellie" };
const ellie2 = { name: "ellie" };
const ellie3 = ellie1;
console.log(ellie1 == ellie2);
console.log(ellie1 === ellie2);
console.log(ellie1 === ellie3);

// 8. if, else if, else(조건 연산자)
const name = "hyun";
if (name === "hyun") {
  console.log("Welcome, Hyun");
} else if (name === "coder") {
  console.log("You are amazing coder");
} else {
  console.log("unknown");
}

// 9. ?(삼항 연산자)
// condition ? value1 : value2;
// true면 (?기준) 오른쪽에 있는걸 실행
// flase면 (:기준) 오른쪽에 있는걸 실행
console.log(name === "hyun" ? "yes" : "no");

// 10. Switch
const browser = "IE";
switch (browser) {
  case "IE":
    console.log("go away!");
    break;
  case "Chrome":
  case "Firefox":
    console.log("love you!");
    break;
  default:
    console.log("same all!");
    break;
}

// 11. Loops

// while -> 조건문이 맞을때만 블록을 실행하고 싶다면 while을 쓰자!
let i = 3;
while (i > 0) {
  console.log(`while: ${i}`);
  i--;
}

// do while -> 블록을 먼저 실행하고 싶으면 do while을 쓰자!
// 블록을 실행한다음에 조건이 맞는지 안맞는지 부터 확인함
do {
  console.log(`do while: ${i}`);
  i--;
} while (i > 0);

// for loop
for (i = 3; i > 0; i--) {
  console.log(`for:${i}`);
}
for (let i = 3; i > 0; i = i - 2) {
  console.log(`inline variable for: ${i}`);
}

// nested loops
for (let i = 0; i < 10; i++) {
  for (let j = 0; j < 10; j++) {
    console.log(`i: ${i}, j:${j}`);
  }
}

// 문제 : 0~10까지 짝수인 아이들만 continue를 이용해서 뽑기
for (let i = 0; i < 11; i++) {
  if (i % 2 !== 0) {
    continue;
  }
  console.log(`q1. ${i}`);
}
// 문제 : 0~10까지를 8을 만나면 멈추게 하기
for (let i = 0; i < 11; i++) {
  if (i > 8) {
    break;
  }
  console.log(`q2. ${i}`);
}
