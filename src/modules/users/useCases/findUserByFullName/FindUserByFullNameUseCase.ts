import { inject, injectable } from "tsyringe";
import { IFindUserByFullNameDTO } from "../../dtos/index";
import { IUsersRepository } from "../../repositories/IUsersRepository";
import { User } from '../../entities/User';


@injectable()
class FindUserByFullNameUseCase {
  constructor(
    @inject("UsersRepository")
    private userRepository: IUsersRepository
  ) {}

  async execute({ first_name, last_name }: IFindUserByFullNameDTO): Promise<User[]> {
    
    const users = await this.userRepository.findUserByFullName({ first_name, last_name });

    return !users ? [] : users ;
  }
}

export { FindUserByFullNameUseCase };
