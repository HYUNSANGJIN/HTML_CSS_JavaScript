"use strict";

// variable(변수)
// read/write
// 변경 될 수 있는 값

/*
    let
    - ES6에 추가되어진 언어
    - js에서 변수를 선언할 수 있는것은 let 딱 하나임
*/

let globalName = "global name"; //어느 곳에서나 접근이 가능함
// ㄴ 최소한으로 쓰는것이 좋음
// ㄴ 가능하면 class나 함수 if, for loop 필여한 부분에서만 정의해서 쓰는것이 좋음

{
  let name = "Hyun";
  console.log(name);
  name = "hello";
  console.log(name);
  console.log(globalName); // globalNmae
}
console.log(name); // block scope 밖에선 블록 안에 내용을 볼수 없음
console.log(globalName); // globalName

/*
var
let을 쓰기전엔 var를 썼었음
var는 쓰면 안됨!!!
var는 값을 선언하기도 전에 쓸 수 있음
ㄴ var hoisiting -> 어디에 선언되었느냐 상관없이 항상 제일 위로 선언을 끌어올려주는 것
var는 block scope이 없음 -> 철저히 무시함
*/

{
  age = 4;
  var age;
}
console.log(age);

/*
    Constant(const) -> 읽기만 가능함 (read)
    - 한번 할당하면 값이 절대 바뀌지 않음
    
    쓰는이유
    - 보안상의 이유
    - thread safety
    - 실수방지

*/

const datInWeek = 7;
const maxNumber = 5;

/*
  Immutable data types : 데이터 자체를 절대 변경하지 못하는것
  ㄴ premitive types, frozen objects

  Mutable data types : 변경이 가능한 데이터 타입
  ㄴ JS에서는 기본적으로 모든 object는 변경이 가능하다.
*/
/*
    Variable types

   -  primitive타입 : 한가지 아이템 -> number, string, boolean, null, undefined
   -  object - 싱글 아이템들을 여러개 묶어서 한 박스로 관리할수 있도록 하는것
   -  function 
*/

const count = 17; //integer
const size = 17.1; // decimal number

console.log(`value : ${count}, type: ${typeof count}`);
console.log(`value : ${size}, type: ${typeof size}`);

// number
const infinity = 1 / 0;
const negativeInfinity = -1 / 0;
const nAn = "not a number" / 2;

console.log(infinity);
console.log(negativeInfinity);
console.log(nAn);

// string
const char = "c";
const jin = "jin";
const greeting = "hello " + jin;
console.log(`value:${greeting}, type:${typeof greeting}`);
const helloBob = `hi ${jin}!`;
console.log(`value: ${helloBob}, type ${typeof helloBob}`);

//boolean
// false : 0, null, undefined, NaN, ''
// true : 나머지 값들
const canRead = true;
const test = 3 < 1; // false
console.log(`value: ${canRead}, type : ${typeof canRead}`);
console.log(`value : ${test}, type: ${typeof test}`);

// null - 텅텅 빈 값
let nothing = null;
console.log(`value: ${nothing}, type: ${typeof nothing}`);

// undefined - 선언은 되었지만 지정되어 있지 않은 값
let x;
console.log(`value: ${x}, type: ${typeof x}`);

// symbol
// 동일한 string을 작성했어도 다른 심볼로 만들어지기 때문에
// 주어지는 string에 상관없이 고유한 식별자를 만들때 사용함
const symbol1 = Symbol("id");
const symbol2 = Symbol("id");
console.log(symbol1 === symbol2);

// 동일한 심볼을 만들고 싶으면..
const gSymbol1 = Symbol.for("id");
const gSymbol2 = Symbol.for("id");
console.log(gSymbol1 === gSymbol2); // true

// 심볼은 바로 출력하면 에러가 발생함
// .description을 이요하여 string으로 변환해주어야 함
console.log(`value: ${symbol1.description}, type:${typeof symbol1}`);

// Dynaminc typing
let text = "hello";
text = 1;
console.log(`value: ${text}, type: ${typeof text}`);

text = "7" + 5;
console.log(`value:${text}, type:${typeof text}`);

text = "8" / "2";
console.log(`value:${text}, type:${typeof text}`);
