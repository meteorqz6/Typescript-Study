// 객체 타입의 호환성
// 어떤 객체 타입을 다른 객체 타입으로 취급해도 괜찮은가?
type Animal = {
  name: string;
  color: string;
};

type Dog = {
  name: string;
  color: string;
  breed: string;
};

let animal: Animal = {
  name: "기린",
  color: "yellow",
};

let dog: Dog = {
  name: "꼬미",
  color: "white",
  breed: "비숑",
};
