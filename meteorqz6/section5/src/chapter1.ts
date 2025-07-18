// 인터페이스 확장
interface Animal {
  name: string;
  color: string;
}

interface Dog extends Animal {
  // name: "꼬미";
  isBark: boolean;
}

const dog: Dog = {
  // name: "꼬미",
  name: "",
  color: "",
  isBark: true,
};

interface Cat extends Animal {
  isScratch: boolean;
}

interface Chicken extends Animal {
  isFly: boolean;
}

interface DogCat extends Dog, Cat {}

const dogCat: DogCat = {
  name: "",
  color: "",
  isBark: true,
  isScratch: true,
};
