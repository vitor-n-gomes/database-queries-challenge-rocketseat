import { Request, Response } from "express";
import { container } from "tsyringe";
import { FindUsersByGameIdUseCase } from "./FindUsersByGameIdUseCase";

class FindUsersByGameIdController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.body;

    const useCase = container.resolve(FindUsersByGameIdUseCase);

    const allGames = await useCase.execute(id);

    return response.status(201).json(allGames);
  }
}

export { FindUsersByGameIdController };
