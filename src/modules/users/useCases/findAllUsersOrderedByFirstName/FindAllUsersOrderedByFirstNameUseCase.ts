import { inject, injectable } from "tsyringe";
import { IFindUserWithGamesDTO } from "../../dtos/index";
import { IUsersRepository } from "../../repositories/IUsersRepository";
import { User } from '../../entities/User';


@injectable()
class FindAllUsersOrderedByFirstNameUseCase {
  constructor(
    @inject("UsersRepository")
    private userRepository: IUsersRepository
  ) {}

  async execute(): Promise<User[]> {
    
    const users = await this.userRepository.findAllUsersOrderedByFirstName();

    return users;
  }
}

export { FindAllUsersOrderedByFirstNameUseCase };
