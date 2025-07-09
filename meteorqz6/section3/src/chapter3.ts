// 객체 타입의 호환성
// 어떤 객체 타입을 다른 객체 타입으로 취급해도 괜찮은가?

// 슈퍼 타입
type Animal = {
  name: string;
  color: string;
};

// 서브 타입
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

animal = dog;

// dog = animal;
// 'breed' 속성이 'Animal' 형식에 없지만 'Dog' 형식에서 필수입니다.

// 슈퍼 타입
type Book = {
  name: string;
  price: number;
};

// 서브 타입
type ProgrammingBook = {
  name: string;
  price: number;
  skill: string;
};

let book: Book;
let programmingBook: ProgrammingBook = {
  name: "한 입 크기로 잘라먹는 리액트",
  price: 33000,
  skill: "reactjs",
};

book = programmingBook;
// programmingBook = book;

// 초과 프로퍼티 검사
// 초기화할 때는 초과 프로퍼티를 넣어서는 안 된다.
let book2: Book = {
  name: "한 입 크기로 잘라먹는 리액트",
  price: 33000,
  // skill: "reactjs",
};
