import { Request, Response } from "express";
import { container } from "tsyringe";
//import { CreateUserUseCase } from "./CreateUserUseCase";

class FindUserByFullNameController {
  async handle(request: Request, response: Response): Promise<Response> {
    

    return response.status(201).send();
  }
}

export { FindUserByFullNameController };
