import { sequelize } from '../config/database';
import { Client } from './client';
import { Employee } from './employee';
import { Invoice } from './invoice';
import { InvoiceItem } from './invoiceItem';
import { User } from './user';
import { Role } from './role';

export const models = {
  Client: Client.init(sequelize),
  Employee: Employee.init(sequelize),
  Invoice: Invoice.init(sequelize),
  InvoiceItem: InvoiceItem.init(sequelize),
  User: User.init(sequelize),
  Role: Role.init(sequelize),
};

export const initRelations = () => {
  const { Client, Employee, Invoice, InvoiceItem, User, Role } = models;

  // Client <-> Invoice
  Client.hasMany(Invoice, { foreignKey: 'clientId', as: 'invoices' });
  Invoice.belongsTo(Client, { foreignKey: 'clientId', as: 'client' });

  // Invoice <-> InvoiceItem
  Invoice.hasMany(InvoiceItem, { foreignKey: 'invoiceId', as: 'items' });
  InvoiceItem.belongsTo(Invoice, { foreignKey: 'invoiceId', as: 'invoice' });

  // User <-> Role
  Role.hasMany(User, { foreignKey: 'roleId', as: 'users' });
  User.belongsTo(Role, { foreignKey: 'roleId', as: 'role' });
};

export const syncDatabase = async () => {
  await sequelize.sync({ alter: true });
};