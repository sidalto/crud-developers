import { v4 as uuid } from 'uuid';

class Developer {
  id?: string;
  nome: string;
  sexo: string;
  idade: number;
  hobby: string;
  data_nascimento: Date;

  constructor() {
    if (!this.id) {
      this.id = uuid();
    }
  }
}

export { Developer };
