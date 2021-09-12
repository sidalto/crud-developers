import { Developer } from '../models/Developer';

interface ICreateDeveloperDTO {
  id?: string;
  nome: string;
  sexo: string;
  idade: number;
  hobby: string;
  data_nascimento: Date;
}

interface IDeveloperRepository {
  create({
    nome,
    sexo,
    idade,
    hobby,
    data_nascimento,
  }: ICreateDeveloperDTO): Promise<Developer>;

  findById(id: string): Promise<Developer>;

  findByProperty(property: string, value: string): Promise<Developer[]>;

  showAll(): Promise<Developer[]>;

  update(developer: Developer, id: string): Promise<Developer>;

  delete(id: string): Promise<void>;
}

export { IDeveloperRepository, ICreateDeveloperDTO };
