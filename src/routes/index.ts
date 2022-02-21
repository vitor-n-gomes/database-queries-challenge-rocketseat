import { Router } from "express";

import { usersRoutes } from "./users.route";

const router = Router();

router.use("/users", usersRoutes);
/*
router.use("/categories", categoriesRoutes);
router.use("/specifications", specificationRoutes);

router.use(authenticateRoutes);
*/
export { router };
