// object - 객체 리터럴 타입
let user: {
  id?: number;
  name: string;
} = {
  id: 1,
  name: "John Doe",
};

user = {
  name: "홍길동",
};

let config: {
  readonly apiKey: string;
} = {
  apiKey: "MY API KEY",
};

// config.apiKey = "hacked";
