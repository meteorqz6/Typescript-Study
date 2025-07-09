// any
// 특정 변수의 타입을 확실히 모를 때
let anyVar: any = 10;
// anyVar = "hello";

// anyVar = true;
// anyVar = {};
// anyVar = () => {};

// anyVar.toUpperCase(); // 런타임 에러를 일으킨다
// anyVar.toFixed();

let num: number = 10;
num = anyVar;

// unknown
let unknownVar: unknown;
unknownVar = "";
unknownVar = 1;
unknownVar = () => {};

// num = unknownVar;
// 'unknown' 형식은 'number' 형식에 할당할 수 없습니다.

if (typeof unknownVar === "number") {
  num = unknownVar;
}
