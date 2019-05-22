// Object Destructuring
const { body } = { // The object
  describe: 'The body of the note',
  isBeautiful: true,
  isIntelligent: false,
};
  // With Destructuring
console.log('Hello', { body });// Assign key body to body
// Without Destructuring
console.log('Hello', { body });
