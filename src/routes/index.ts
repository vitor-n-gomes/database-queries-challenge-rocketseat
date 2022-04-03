import { Router } from "express";

import { usersRoutes } from "./users.route";
import { gamesRoutes } from "./games.route";

const router = Router();

router.use("/users", usersRoutes);
router.use("/games", gamesRoutes);
/*
router.use("/categories", categoriesRoutes);
router.use("/specifications", specificationRoutes);

router.use(authenticateRoutes);
*/
export { router };
