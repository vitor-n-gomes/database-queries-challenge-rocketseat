import { Router } from "express";

import { CountAllGamesController } from "../modules/games/useCase/countAllGames/CountAllGamesController";
import { FindByTitleContainingController } from "../modules/games/useCase/findByTitleContaining/FindByTitleContainingController";
import { FindUsersByGameIdController } from "../modules/games/useCase/findUsersByGameId/FindUsersByGameIdController";


const gamesRoutes = Router();

const findByTitleContainingController = new FindByTitleContainingController();
const countAllGamesController = new CountAllGamesController();
const findUsersByGameIdController = new FindUsersByGameIdController();

gamesRoutes.get("/:title", findByTitleContainingController.handle);
gamesRoutes.get("/", countAllGamesController.handle);
gamesRoutes.get("/game/:id", findUsersByGameIdController.handle);

export { gamesRoutes };
