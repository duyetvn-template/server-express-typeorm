import { Repository } from 'typeorm';
import { User } from './user.entity';
import BaseService from 'common/base.service';

export class UserService extends BaseService<User> {
  protected repository: Repository<User>;

	constructor(userRepository: Repository<User>) {
		super(repository);
	}
}
