import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class CreatePersonalDataTable1730659517320
  implements MigrationInterface
{
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'personal_data',
        columns: [
          {
            name: 'id',
            type: 'int',
            isPrimary: true,
            isGenerated: true,
            generationStrategy: 'increment',
          },
          {
            name: 'name',
            type: 'varchar',
          },
          {
            name: 'email',
            type: 'varchar',
            isUnique: true,
          },
          {
            name: 'phone',
            type: 'varchar',
          },
          {
            name: 'address_street',
            type: 'varchar',
          },
          {
            name: 'address_city',
            type: 'varchar',
          },
          {
            name: 'address_state',
            type: 'varchar',
          },
          {
            name: 'address_country',
            type: 'varchar',
          },
          {
            name: 'address_number',
            type: 'varchar',
          },
          {
            name: 'address_zip',
            type: 'varchar',
          },
          {
            name: 'linkedin_link',
            type: 'varchar',
          },
          {
            name: 'github_link',
            type: 'varchar',
          },
          {
            name: 'about',
            type: 'varchar',
          },
        ],
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('personal_data');
  }
}
