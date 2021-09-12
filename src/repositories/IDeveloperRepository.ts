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
  }: ICreateDeveloperDTO): Developer;

  findByName(name: string): Developer;

  listAll(): Developer[];

  update(id: string): Developer;

  delete(id: string): Developer;
}

export { IDeveloperRepository, ICreateDeveloperDTO };
