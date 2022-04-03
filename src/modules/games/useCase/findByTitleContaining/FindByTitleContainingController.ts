import { Request, Response } from "express";
import { container } from "tsyringe";
import { FindByTitleContainingUseCase } from "./FindByTitleContainingUseCase";

class FindByTitleContainingController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { title } = request.params;

    const useCase = container.resolve(FindByTitleContainingUseCase);

    const allGames = await useCase.execute(title);

    return response.status(201).json(allGames);
  }
}

export { FindByTitleContainingController };
