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
      email: 'boladeojo@gmail.com',
      firstName: 'Bolade',
      lastName: 'Ojo',
      password: passwordHash.generate('123456'),
      type: 'client',
      isAdmin: false,
    },
  ],
};
