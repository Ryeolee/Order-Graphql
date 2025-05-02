import { Query, Resolver } from '@nestjs/graphql';
import { User } from 'src/dto/User';

// User 타입을 위한 GraphQL 리졸버임을 나타냅니다.
// 즉, 이 클래스에서 정의한 메서드들이 User와 관련된 GraphQL 쿼리 또는 뮤테이션을 처리한다는 뜻입니다.
@Resolver(() => User)
export class UserResolver {
  // GraphQL의 Query 타입 필드임을 나타냄.
  // GraphQL 쿼리에서 findUser라는 이름으로 호출할 수 있음.
  @Query(() => User)
  findUsers(): User {
    return { id: 1, nickname: 'lee', tier: 'gold' };
  }
}
