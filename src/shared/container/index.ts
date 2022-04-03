import "reflect-metadata";
import { container } from "tsyringe";
import { UsersRepository } from "../../modules/users/repositories/implementations/UsersRepository";
import { IUsersRepository } from "../../modules/users/repositories/IUsersRepository";

import { GamesRepository } from "../../modules/games/repositories/implementations/GamesRepository";
import { IGamesRepository } from "../../modules/games/repositories/IGamesRepository";

container.registerSingleton<IUsersRepository>(
  "UsersRepository",
  UsersRepository
);

container.registerSingleton<IGamesRepository>(
  "GamesRepository",
  GamesRepository
);