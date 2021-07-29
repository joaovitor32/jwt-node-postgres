import { Request, Response } from "express";

import LoginUserUseCase from "./LoginUserUseCase";

export default class LoginUserController {
  constructor(private loginUserUseCase: LoginUserUseCase) {}

  async handle(request: Request, response: Response): Promise<Response> {
    const { nome, senha } = request.body;

    try {
      const { user, token } = await this.loginUserUseCase.execute({
        nome,
        senha,
      });

      return response.json({ user, token });
    } catch (err) {
      return response.status(400).json({
        message: err.message || "Unexpected error",
      });
    }
  }
}
