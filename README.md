## 🛠️ Stack

| 기술 스택      | 설명                                      |
|----------------|-------------------------------------------|
| ⚡ **GraphQL**  | 클라이언트가 필요한 데이터만 요청할 수 있는 쿼리 언어 |
| 🏗 **TypeORM**  | TypeScript 기반의 ORM으로 DB 모델링 및 쿼리 수행 |
| 🌀 **TypeScript** | JavaScript에 타입을 부여한 언어로 안정성과 가독성 향상 |
| 🚀 **NestJS**   | 강력한 DI 기반의 Node.js 백엔드 프레임워크 |
| 🗄 **MySQL**     | 관계형 데이터베이스 시스템, 구조적 데이터 저장 |


## 📡 API 제공 내역 (GraphQL 기준)

### 🛠 Mutation

| 이름          | 설명           | 예시 호출 |
|---------------|----------------|------------|
| `signUp`      | 회원 가입       | `mutation { signUp(input: SignUpInput): User }` |
| `createOrder` | 주문 생성       | `mutation { createOrder(input: CreateOrderInput): Order }` |

### 🔍 Query

| 이름                     | 설명                         | 예시 호출 |
|--------------------------|------------------------------|------------|
| `users`                  | 모든 유저 조회               | `query { users { id name email } }` |
| `userOrders(userId: ID)` | 특정 유저의 주문 내역 조회   | `query { userOrders(userId: 1) { id product { name } } }` |
| `products`               | 전체 상품 조회               | `query { products { id name price } }` |



## ERD

![상품 주문 (1)](https://github.com/user-attachments/assets/820eee72-dc1b-4064-8828-12c48eddc6b7)











<br/><br/><br/><br/>



## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## License

Nest is [MIT licensed](LICENSE).
