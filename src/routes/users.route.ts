import { Router } from "express";

import { FindUserWithGamesByIdController } from "../modules/users/useCases/findUserWithGamesById/FindUserWithGamesByIdController";
import { FindAllUsersOrderedByFirstNameController } from "../modules/users/useCases/findAllUsersOrderedByFirstName/FindAllUsersOrderedByFirstNameController";
import { FindUserByFullNameController } from "../modules/users/useCases/findUserByFullName/FindUserByFullNameController";


const usersRoutes = Router();

const findAllUsersOrderedByFirstNameController = new FindAllUsersOrderedByFirstNameController();
const findUserWithGamesByIdController = new FindUserWithGamesByIdController();
const findUserByFullNameController = new FindUserByFullNameController();

usersRoutes.get("/", findAllUsersOrderedByFirstNameController.handle);
usersRoutes.get("/:id", findUserWithGamesByIdController.handle);
usersRoutes.get("/order/:name", findUserByFullNameController.handle);

export { usersRoutes };
