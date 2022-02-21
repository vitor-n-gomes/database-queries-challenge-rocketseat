import { inject, injectable } from "tsyringe";
import { IFindUserWithGamesDTO } from "../../dtos/index";
import { IUsersRepository } from "../../repositories/IUsersRepository";
import { User } from '../../entities/User';


@injectable()
class FindUserWithGamesByIdUseCase {
  constructor(
    @inject("UsersRepository")
    private userRepository: IUsersRepository
  ) {}

  async execute({user_id
  }: IFindUserWithGamesDTO): Promise<User> {
    
    const oUSer = await this.userRepository.findUserWithGamesById({user_id
    });

    return oUSer;
  }
}

export { FindUserWithGamesByIdUseCase };
