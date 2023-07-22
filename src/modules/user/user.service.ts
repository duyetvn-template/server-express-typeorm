// import { Repository } from 'typeorm';
// import { User } from './user.entity';
// import BaseService from 'common/base.service';

import { User } from './dto/user.dto'

// export class UserService extends BaseService<User> {
//   protected repository: Repository<User>;

// 	constructor(userRepository: Repository<User>) {
// 		super(repository);
// 	}
// }

// src/users/usersService.ts

// A post request should not contain an id.
export type UserCreationParams = Pick<User, 'email' | 'name' | 'phoneNumbers'>

export class UsersService {
  public get(id: number, name?: string): User {
    return {
      id,
      email: 'jane@doe.com',
      name: name ?? 'Jane Doe',
      status: 'Happy',
      phoneNumbers: [],
    }
  }

  public create(userCreationParams: UserCreationParams): User {
    return {
      id: Math.floor(Math.random() * 10000), // Random
      status: 'Happy',
      ...userCreationParams,
    }
  }
}
