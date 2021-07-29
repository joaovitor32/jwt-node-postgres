import { Request, Response } from "express";

import CreateUserUseCase from "./CreateUserUseCase";

export default class CreateUserController {
  constructor(private createUserUseCase: CreateUserUseCase) {}

  async handle(request: Request, response: Response): Promise<Response> {
    const { nome, senha } = request.body;

    try {
      const user = await this.createUserUseCase.execute({
        nome,
        senha,
      });

      return response.status(201).send(user);
    } catch (err) {
      return response.status(400).json({
        message: err.message || "Unexpected error",
      });
    }
  }
}
