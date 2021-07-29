import { Router } from "express";

import CheckAuthorizationMiddleware from "./middlewares/CheckAuthorizationMiddleware";
import { loginUserController } from "./useCases/Token/UserLogin";
import { createUserController } from "./useCases/User/CreateUser";
import { showProfileUserController } from "./useCases/User/ShowProfileUser";

const router = Router();

router.post("/users", (request, response) => {
  return createUserController.handle(request, response);
});

router.post("/login", (request, response) => {
  return loginUserController.handle(request, response);
});

router.use(CheckAuthorizationMiddleware);

router.get("/showprofile", (request, response) => {
  return showProfileUserController.handle(request, response);
});

export default router;
