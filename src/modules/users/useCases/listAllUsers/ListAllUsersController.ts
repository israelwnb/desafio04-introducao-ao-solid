import { Request, Response } from "express";

import { ListAllUsersUseCase } from "./ListAllUsersUseCase";

class ListAllUsersController {
    constructor(private listAllUsersUseCase: ListAllUsersUseCase) {}

    handle(request: Request, response: Response): Response {
        const user_id = request.get("user_id");

        try {
            const allUsers = this.listAllUsersUseCase.execute({ user_id });

            return response.json(allUsers);
        } catch (err) {
            return response.status(400).send({ error: err.message });
        }
    }
}

export { ListAllUsersController };
