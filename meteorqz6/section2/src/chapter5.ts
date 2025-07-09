// enum 타입
// 여러가지 값들에 각각 이름을 부여해 열거해두고 사용하는 타입
// 컴파일 결과 사라지지 않는다

// enum Role {
//   ADMIN = 0,
//   USER = 1,
//   GUEST = 2,
// }

// enum Role {
//   ADMIN = 10,
//   USER, // 11
//   GUEST, // 12
// }

enum Role {
  ADMIN, // 자동으로 0부터
  USER,
  GUEST,
}

enum Language {
  korean = "ko",
  english = "en",
}

const user1 = {
  name: "이정환",
  role: Role.ADMIN, // 0 <- 관리자
  language: Language.korean,
};

const user2 = {
  name: "홍길동",
  role: Role.USER, // 1 <- 일반 유저
  Language: Language.english,
};

const user3 = {
  name: "아무개",
  role: Role.GUEST, // 2 <- 게스트
  language: Language.korean,
};
