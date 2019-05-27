import moment from 'moment';
import passwordHash from 'password-hash';

export default {
  users: [
    {
      id: 1,
      email: 'example@example.com',
      firstName: 'Tammy',
      lastName: 'Aprekuma',
      password: passwordHash.generate('password'),
      type: 'staff',
      isAdmin: true,
    },
    {
      id: 2,
      email: 'john@example.com',
      firstName: 'John',
      lastName: 'Oke',
      password: passwordHash.generate('password'),
      type: 'cashier',
      isAdmin: false,
    },
    {
      id: 3,
      email: 'johnoke@gmail.com',
      firstName: 'John',
      lastName: 'Oke',
      password: passwordHash.generate('password'),
      type: 'customer',
      isAdmin: false,
    },
  ],
  accounts: [
    {
      id: 1,
      accountNumber: 222010771,
      owner: 1,
      type: 'savings',
      status: 'active',
      balance: 20000.95,
      dateCreated: moment(),
    },
    {
      id: 2,
      accountNumber: 222010872,
      owner: 3,
      type: 'current',
      status: 'dormant',
      balance: 400000.95,
      dateCreated: moment(),
    },
  ],
  transactions: [
    {
      transactionId: 1,
      createdOn: moment(),
      transactionType: 'credit',
      accountNumber: 222010771,
      cashier: 2,
      amount: '5000.00',
      oldBalance: '50000.00',
      newBalance: '55000.00',
    },
    {
      transactionId: 2,
      createdOn: moment(),
      transactionType: 'debit',
      accountNumber: 222010771,
      cashier: 2,
      amount: '10000.00',
      oldBalance: '55000.00',
      newBalance: '65000.00',
    },
  ],
};
