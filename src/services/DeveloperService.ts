import { Developer } from '../models/Developer';
import {
  ICreateDeveloperDTO,
  IDeveloperRepository,
} from '../repositories/IDeveloperRepository';

class DeveloperService {
  constructor(private developerRepository: IDeveloperRepository) {}

  executeCreate({
    nome,
    idade,
    sexo,
    hobby,
    data_nascimento,
  }: ICreateDeveloperDTO): Developer {
    return this.developerRepository.create({
      nome,
      idade,
      sexo,
      hobby,
      data_nascimento,
    });
  }

  executeListAll(): Developer[] {
    return this.developerRepository.listAll();
  }

  executeUpdate(): Developer {
    return new Developer();
  }
  executeDelete(): void {}
  executeFindByName(): Developer {
    return new Developer();
  }
}

export { DeveloperService };
