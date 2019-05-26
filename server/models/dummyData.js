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
      email: 'johnoke@gmail.com',
      firstName: 'John',
      lastName: 'Oke',
      password: passwordHash.generate('great'),
      type: 'staff',
      isAdmin: false,
    },
    {
      id: 3,
      email: 'johnoke@gmail.com',
      firstName: 'John',
      lastName: 'Oke',
      password: passwordHash.generate('great'),
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
      accountNumber: 222010771,
      cashier: 1,
      transactionType: 'credit',
      accountBalance: '50000.00',
    },
    {
      transactionId: 2,
      accountNumber: 222010772,
      cashier: 1,
      transactionType: 'debit',
      accountBalance: '10000.00',
    },
    {
      transactionId: 3,
      accountNumber: 222010773,
      cashier: 1,
      transactionType: 'debit',
      accountBalance: '10000.00',
    },
  ],
};
