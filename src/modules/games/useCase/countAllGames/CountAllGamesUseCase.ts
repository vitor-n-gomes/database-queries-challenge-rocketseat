import { inject, injectable } from "tsyringe";
import { IGamesRepository } from "../../repositories/IGamesRepository";
import { Game } from '../../entities/Game';


@injectable()
class CountAllGamesUseCase {
  constructor(
    @inject("GamesRepository")
    private gamesRepository: IGamesRepository
  ) {}

  async execute(): Promise<any> {
    
    const totalGames = await this.gamesRepository.countAllGames();
    
    return totalGames;
  }
}

export { CountAllGamesUseCase };
