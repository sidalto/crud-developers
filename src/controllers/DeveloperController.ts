import { Request, Response } from 'express';
import { Developer } from '../models/Developer';
import { DeveloperRepository } from '../repositories/DeveloperRepository';
import { DeveloperService } from '../services/DeveloperService';

class DeveloperController {
  index(request: Request, response: Response): void {
    const developerService = new DeveloperService(new DeveloperRepository());
    const developers = developerService.executeListAll();

    response.status(200).json({ developers });
  }

  create(request: Request, response: Request): Developer {
    const developerService = new DeveloperService(new DeveloperRepository());
    const { nome, idade, sexo, hobby, data_nascimento } = request.body;

    return developerService.executeCreate({
      nome,
      idade,
      sexo,
      hobby,
      data_nascimento,
    });
  }
}

export default new DeveloperController();
