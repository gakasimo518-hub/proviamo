import { Model, DataTypes, Optional, Sequelize } from 'sequelize';

export interface ClientAttributes {
  id: number;
  name: string;
  email: string;
  phone: string;
  address: string;
  createdAt?: Date;
  updatedAt?: Date;
}

export interface ClientCreationAttributes
  extends Optional<ClientAttributes, 'id'> {}

export class Client extends Model<ClientAttributes, ClientCreationAttributes>
  implements ClientAttributes {
  public id!: number;
  public name!: string;
  public email!: string;
  public phone!: string;
  public address!: string;

  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;

  static init(sequelize: Sequelize) {
    Client.init(
      {
        id: {
          type: DataTypes.INTEGER.UNSIGNED,
          autoIncrement: true,
          primaryKey: true,
        },
        name: {
          type: DataTypes.STRING(128),
          allowNull: false,
        },
        email: {
          type: DataTypes.STRING(256),
          allowNull: false,
          unique: true,
          validate: { isEmail: true },
        },
        phone: {
          type: DataTypes.STRING(32),
          allowNull: false,
        },
        address: {
          type: DataTypes.STRING(512),
          allowNull: false,
        },
      },
      {
        tableName: 'clients',
        sequelize,
      }
    );
  }
}