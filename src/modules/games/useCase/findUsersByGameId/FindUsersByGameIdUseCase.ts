import { inject, injectable } from "tsyringe";;
import { IGamesRepository } from "../../repositories/IGamesRepository";
import { Game } from '../../entities/Game';
import { User } from '../../../users/entities/User';


@injectable()
class FindUsersByGameIdUseCase {
  constructor(
    @inject("GamesRepository")
    private gamesRepository: IGamesRepository
  ) {}

  async execute(games_id: string): Promise<User[]> {
    
    const aUser = await this.gamesRepository.findUsersByGameId(games_id);
    
    return aUser;
  }
}

export { FindUsersByGameIdUseCase };
