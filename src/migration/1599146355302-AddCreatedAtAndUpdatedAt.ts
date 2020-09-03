import { MigrationInterface, QueryRunner, TableColumn } from 'typeorm';

export class AddCreatedAtAndUpdatedAt1599146355302
  implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropColumn('users', 'createdAt');
    await queryRunner.addColumns('users', [
      new TableColumn({
        name: 'createdAt',
        type: 'timestamp',
        isNullable: false,
        default: 'now()',
      }),
      await new TableColumn({
        name: 'updatedAt',
        type: 'timestamp',
        isNullable: false,
        default: 'now()',
      }),
    ]);
    await queryRunner.addColumns('posts', [
      new TableColumn({
        name: 'createdAt',
        type: 'timestamp',
        isNullable: false,
        default: 'now()',
      }),
      new TableColumn({
        name: 'updatedAt',
        type: 'timestamp',
        isNullable: false,
        default: 'now()',
      }),
    ]);
    await queryRunner.addColumns('comments', [
      new TableColumn({
        name: 'createdAt',
        type: 'timestamp',
        isNullable: false,
        default: 'now()',
      }),
      new TableColumn({
        name: 'updatedAt',
        type: 'timestamp',
        isNullable: false,
        default: 'now()',
      }),
    ]);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    try {
      await queryRunner.dropColumn('users', 'updatedAt');
      await queryRunner.dropColumn('users', 'createdAt');
      await queryRunner.dropColumn('posts', 'updatedAt');
      await queryRunner.dropColumn('posts', 'createdAt');
      await queryRunner.dropColumn('comments', 'updatedAt');
      await queryRunner.dropColumn('comments', 'createdAt');
    } catch (e) {}
  }
}
