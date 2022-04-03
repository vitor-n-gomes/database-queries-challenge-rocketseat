import { Request, Response } from "express";
import { container } from "tsyringe";
import { CountAllGamesUseCase } from "./CountAllGamesUseCase";

class CountAllGamesController {
  async handle(request: Request, response: Response): Promise<Response> {

    const countAllGamesUseCase = container.resolve(
      CountAllGamesUseCase
    );

    const total = await countAllGamesUseCase.execute();


    return response.status(200).json(total);
  }
}

export { CountAllGamesController };
