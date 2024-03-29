import { injectable } from "inversify";
import { NextFunction, Request, Response } from "express";
import Service from "../service/pets/PetsService";
import ApiError from "../middleware/ApiError";

@injectable()
class PetsController {
  constructor(private readonly _service: Service) {
    this.getAll = this.getAll.bind(this);
  }

  public getAll = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const result = await this._service.getAll();
      res.status(200).json(result);
    } catch (e: unknown) {
      const message = e instanceof Error ? e.message : JSON.stringify(e);
      next(ApiError.internal(message));
    }
  };
}

export default PetsController;
