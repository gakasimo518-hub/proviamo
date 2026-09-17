import { Model, DataTypes, Sequelize } from 'sequelize';
import { Client } from './client';

export class Invoice extends Model {
  public id!: number;
  public clientId!: number;
  public total!: number;
  public status!: 'draft' | 'sent' | 'paid';
  public dueDate!: Date;
  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;

  static init(sequelize: Sequelize) {
    return super.init(
      {
        id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
        clientId: { type: DataTypes.INTEGER, allowNull: false },
        total: { type: DataTypes.DECIMAL(10, 2), allowNull: false },
        status: {
          type: DataTypes.ENUM('draft', 'sent', 'paid'),
          defaultValue: 'draft',
        },
        dueDate: { type: DataTypes.DATE, allowNull: false },
      },
      { sequelize, tableName: 'invoices' }
    );
  }
}