import { Model, DataTypes, Sequelize } from 'sequelize';
import { Role } from './role';

export class User extends Model {
  public id!: number;
  public username!: string;
  public password!: string;
  public roleId!: number;
  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;

  static init(sequelize: Sequelize) {
    return super.init(
      {
        id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
        username: { type: DataTypes.STRING, allowNull: false, unique: true },
        password: { type: DataTypes.STRING, allowNull: false },
        roleId: { type: DataTypes.INTEGER, allowNull: false },
      },
      { sequelize, tableName: 'users' }
    );
  }
}