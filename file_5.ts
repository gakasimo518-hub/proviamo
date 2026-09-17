import { Model, DataTypes, Optional, Sequelize } from 'sequelize';

export interface EmployeeAttributes {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  position: string;
  createdAt?: Date;
  updatedAt?: Date;
}

export interface EmployeeCreationAttributes
  extends Optional<EmployeeAttributes, 'id'> {}

export class Employee extends Model<EmployeeAttributes, EmployeeCreationAttributes>
  implements EmployeeAttributes {
  public id!: number;
  public firstName!: string;
  public lastName!: string;
  public email!: string;
  public phone!: string;
  public position!: string;

  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;

  static init(sequelize: Sequelize) {
    Employee.init(
      {
        id: {
          type: DataTypes.INTEGER.UNSIGNED,
          autoIncrement: true,
          primaryKey: true,
        },
        firstName: {
          type: DataTypes.STRING(64),
          allowNull: false,
        },
        lastName: {
          type: DataTypes.STRING(64),
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
        position: {
          type: DataTypes.STRING(128),
          allowNull: false,
        },
      },
      {
        tableName: 'employees',
        sequelize,
      }
    );
  }
}