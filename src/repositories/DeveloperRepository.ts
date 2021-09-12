import { Developer } from '../models/Developer';
import {
  ICreateDeveloperDTO,
  IDeveloperRepository,
} from './IDeveloperRepository';

class DeveloperRepository implements IDeveloperRepository {
  private developers: Developer[];

  constructor() {
    this.developers = [];
  }

  create({
    nome,
    sexo,
    idade,
    hobby,
    data_nascimento,
  }: ICreateDeveloperDTO): Developer {
    const developer = new Developer();

    Object.assign(developer, {
      nome,
      sexo,
      idade,
      hobby,
      data_nascimento: new Date(),
    });

    return developer;
  }

  findByName(name: string): Developer {
    return new Developer();
  }

  listAll(): Developer[] {
    return [];
  }

  update(id: string): Developer {
    return new Developer();
  }

  delete(id: string): Developer {
    return new Developer();
  }
}

export { DeveloperRepository };
