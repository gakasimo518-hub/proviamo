import { Model, DataTypes, Sequelize } from 'sequelize';

export class Employee extends Model {
  public id!: number;
  public firstName!: string;
  public lastName!: string;
  public email!: string;
  public position!: string;
  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;

  static init(sequelize: Sequelize) {
    return super.init(
      {
        id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
        firstName: { type: DataTypes.STRING, allowNull: false },
        lastName: { type: DataTypes.STRING, allowNull: false },
        email: { type: DataTypes.STRING, allowNull: false, unique: true },
        position: { type: DataTypes.STRING, allowNull: false },
      },
      { sequelize, tableName: 'employees' }
    );
  }
}