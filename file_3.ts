import { sequelize } from '../config/database';
import { Client } from './client';
import { Employee } from './employee';
import { Invoice } from './invoice';
import { InvoiceItem } from './invoiceItem';
import { User } from './user';
import { Role } from './role';

/**
 * Initialize all models and set up associations
 */
export const initModels = () => {
  Client.init(sequelize);
  Employee.init(sequelize);
  Invoice.init(sequelize);
  InvoiceItem.init(sequelize);
  User.init(sequelize);
  Role.init(sequelize);

  // Associations ---------------------------------------------------------

  // User ↔ Role (many-to-many)
  User.belongsToMany(Role, {
    through: 'user_roles',
    foreignKey: 'user_id',
    otherKey: 'role_id',
    as: 'roles',
  });
  Role.belongsToMany(User, {
    through: 'user_roles',
    foreignKey: 'role_id',
    otherKey: 'user_id',
    as: 'users',
  });

  // Client ↔ Invoice (one-to-many)
  Client.hasMany(Invoice, { foreignKey: 'client_id', as: 'invoices' });
  Invoice.belongsTo(Client, { foreignKey: 'client_id', as: 'client' });

  // Invoice ↔ InvoiceItem (one-to-many)
  Invoice.hasMany(InvoiceItem, { foreignKey: 'invoice_id', as: 'items' });
  InvoiceItem.belongsTo(Invoice, { foreignKey: 'invoice_id', as: 'invoice' });

  // Employee ↔ Invoice (one-to-many) – the employee who created the invoice
  Employee.hasMany(Invoice, { foreignKey: 'employee_id', as: 'createdInvoices' });
  Invoice.belongsTo(Employee, { foreignKey: 'employee_id', as: 'employee' });

  // Sync models (optional, you can use migrations instead)
  // sequelize.sync({ alter: true });
};

export {
  sequelize,
  Client,
  Employee,
  Invoice,
  InvoiceItem,
  User,
  Role,
};