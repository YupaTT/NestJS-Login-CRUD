import { MigrationInterface, QueryRunner, Table } from "typeorm"

export class Create1689362029615 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name: "phone",
            columns: [
                {
                    name: "id",
                    type: "int",
                    isPrimary: true,
                    isGenerated: true,
                    generationStrategy: "increment",
                },
                {
                    name: "smartphone_name",
                    type: "varchar",
                },
                {
                    name: "model",
                    type: "varchar",
                },
                {
                    name: "reference_price",
                    type: "float",
                },
                {
                    name: "selling_price",
                    type: "float",
                },
                {
                    name: "model_year",
                    type: "int",
                },
                {
                    name: "created_at",
                    type: "timestamp",
                    default: "CURRENT_TIMESTAMP",
                },
                {
                    name: "updated_at",
                    type: "timestamp",
                    default: "CURRENT_TIMESTAMP",
                },
            ],
        }), true);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("phone");
    }

}