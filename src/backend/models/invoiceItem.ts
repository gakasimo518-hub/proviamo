import { Model, DataTypes, Sequelize } from 'sequelize';
import { Invoice } from './invoice';

export class InvoiceItem extends Model {
  public id!: number;
  public invoiceId!: number;
  public description!: string;
  public quantity!: number;
  public unitPrice!: number;
  public total!: number;
  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;

  static init(sequelize: Sequelize) {
    return super.init(
      {
        id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
        invoiceId: { type: DataTypes.INTEGER, allowNull: false },
        description: { type: DataTypes.STRING, allowNull: false },
        quantity: { type: DataTypes.INTEGER, allowNull: false },
        unitPrice: { type: DataTypes.DECIMAL(10, 2), allowNull: false },
        total: { type: DataTypes.DECIMAL(10, 2), allowNull: false },
      },
      { sequelize, tableName: 'invoice_items' }
    );
  }
}