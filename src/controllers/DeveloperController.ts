import { Request, Response } from 'express';
import { DeveloperRepository } from '../repositories/DeveloperRepository';

class DeveloperController {
  private developerRepository: DeveloperRepository;

  async index(request: Request, response: Response): Promise<Response> {
    const developers = await this.developerRepository.showAll();

    return response.status(200).json({ developers });
  }

  async create(request: Request, response: Response): Promise<Response> {
    const { nome, idade, sexo, hobby, data_nascimento } = request.body;
    let developer = await this.developerRepository.create({
      nome,
      idade,
      sexo,
      hobby,
      data_nascimento,
    });

    return response.status(200).json({ developer });
  }

  async update(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;
    const { nome, sexo, idade, hobby, data_nascimento } = request.body;
    const developer = await this.developerRepository.update(
      { nome, sexo, idade, hobby, data_nascimento },
      id
    );

    return response.status(200).json({ developer });
  }

  async showById(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;
    const developer = await this.developerRepository.findById(id);

    return response.status(200).json({ developer });
  }

  async delete(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;
    await this.developerRepository.delete(id);

    return response.status(200).json({ message: 'Excluido' });
  }
}

export { DeveloperController };
