import { getRepository, Repository } from 'typeorm';
import { Developer } from '../models/Developer';
import {
  ICreateDeveloperDTO,
  IDeveloperRepository,
} from './IDeveloperRepository';

class DeveloperRepository implements IDeveloperRepository {
  private repository: Repository<Developer>;

  // private static INSTANCE: DeveloperRepository;

  constructor() {
    this.repository = getRepository(Developer);
  }

  // public static getInstance() {
  //   if (!DeveloperRepository.INSTANCE) {
  //     DeveloperRepository.INSTANCE = new DeveloperRepository();
  //   }

  //   return DeveloperRepository.INSTANCE;
  // }

  async create({
    nome,
    sexo,
    idade,
    hobby,
    data_nascimento,
  }: ICreateDeveloperDTO): Promise<Developer> {
    let developer = this.repository.create({
      nome,
      sexo,
      idade,
      hobby,
      data_nascimento,
    });

    developer = await this.repository.save(developer);

    return developer;
  }

  async findById(id: string): Promise<Developer> {
    const developer = await this.repository.findOne({ id });

    return developer;
  }

  async findByProperty(property: string, value: string): Promise<Developer[]> {
    const developers = await this.repository.find({ property });

    return developers;
  }

  async showAll(): Promise<Developer[]> {
    const developers = await this.repository.find();

    return developers;
  }

  async update(developer: Developer, id: string): Promise<Developer> {
    let developerDB = await this.repository.findOne({ id });
    developerDB = developer;

    developer = await this.repository.save(developerDB);

    return developer;
  }

  async delete(id: string): Promise<void> {
    await this.repository.delete({ id });
  }
}

export { DeveloperRepository };
