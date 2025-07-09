// 타입 추론
let a = 10;
let b = "hello";
let c = {
  id: 1,
  name: "이정환",
  profile: {
    nickname: "winterlood",
  },
  urls: ["https://winterlood.com"],
};

let { id, name, profile } = c;

let [one, two, three] = [1, "hello", true];

function func(message = "hello") {
  return "hello";
}

let d; // 암묵적 any -> any 진화
// 명시적으로 any로 정의하는 것과는 다른 방식
d = 10; // any -> number
d.toFixed();

d = "hello"; // number -> string
d.toUpperCase();

const num = 10; // 리터럴타입으로 추론
const str = "hello"; // 리터럴타입으로 추론

let arr = [1, "string"]; // 유니온타입으로 추론 number | string
