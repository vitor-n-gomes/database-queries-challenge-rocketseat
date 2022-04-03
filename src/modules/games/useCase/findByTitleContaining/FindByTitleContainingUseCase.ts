import { inject, injectable } from "tsyringe";
import { IGamesRepository } from "../../repositories/IGamesRepository";
import { Game } from '../../entities/Game';


@injectable()
class FindByTitleContainingUseCase {
  constructor(
    @inject("GamesRepository")
    private gamesRepository: IGamesRepository
  ) {}

  async execute(title: string): Promise<Game[]> {
    
    const games = await this.gamesRepository.findByTitleContaining(title);

    return games;
  }
}

export { FindByTitleContainingUseCase };
