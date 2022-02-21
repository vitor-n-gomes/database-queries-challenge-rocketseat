import { Request, Response } from "express";
import { container } from "tsyringe";
import { FindAllUsersOrderedByFirstNameUseCase } from "./FindAllUsersOrderedByFirstNameUseCase";

class FindAllUsersOrderedByFirstNameController {
  async handle(request: Request, response: Response): Promise<Response> {
    const useCase = container.resolve(FindAllUsersOrderedByFirstNameUseCase);

    const allUsers = await useCase.execute();

    return response.status(201).json(allUsers);
  }
}

export { FindAllUsersOrderedByFirstNameController };
