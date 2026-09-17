import { Model, DataTypes, Sequelize } from 'sequelize';
import { Invoice } from './invoice';

export class Client extends Model {
  public id!: number;
  public name!: string;
  public email!: string;
  public phone!: string;
  public address!: string;
  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;

  static init(sequelize: Sequelize) {
    return super.init(
      {
        id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
        name: { type: DataTypes.STRING, allowNull: false },
        email: { type: DataTypes.STRING, allowNull: false, unique: true },
        phone: { type: DataTypes.STRING, allowNull: false },
        address: { type: DataTypes.STRING, allowNull: true },
      },
      { sequelize, tableName: 'clients' }
    );
  }
}