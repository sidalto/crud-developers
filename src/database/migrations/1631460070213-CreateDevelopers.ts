import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class CreateDevelopers1631460070213 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'developers',
        columns: [
          {
            name: 'id',
            type: 'varchar',
            isPrimary: true,
            generationStrategy: 'uuid',
          },
          {
            name: 'nome',
            type: 'varchar',
          },
          {
            name: 'sexo',
            type: 'varchar',
          },
          {
            name: 'idade',
            type: 'int',
          },
          {
            name: 'hobby',
            type: 'varchar',
          },
          {
            name: 'data_nascimento',
            type: 'date',
          },
        ],
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('developers');
  }
}
