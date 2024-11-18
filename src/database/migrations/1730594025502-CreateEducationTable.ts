import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateEducationTable1730594025502 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name: "educations",
            columns: [
                {
                    name: "id",
                    type: "int",
                    isPrimary: true,
                    isGenerated: true,
                    generationStrategy: 'increment',
                },
                {
                    name: "institution",
                    type: "varchar",
                },
                {
                    name: "course",
                    type: "varchar",
                },
                {
                    name: "degree",
                    type: "varchar",
                },
                {
                    name: "period",
                    type: "int",
                },
            ]
        }));
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("education");
    }
}
