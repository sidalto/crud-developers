import { Column, Entity, PrimaryColumn } from 'typeorm';
import { v4 as uuid } from 'uuid';

@Entity('developers')
class Developer {
  @PrimaryColumn()
  id?: string;

  @Column()
  nome: string;

  @Column()
  sexo: string;

  @Column()
  idade: number;

  @Column()
  hobby: string;

  @Column()
  data_nascimento: Date;

  constructor() {
    if (!this.id) {
      this.id = uuid();
    }
  }
}

export { Developer };
