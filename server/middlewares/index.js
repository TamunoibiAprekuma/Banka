import Helpers from '../helpers/Helpers';

const { extractErrors } = Helpers;


export default class Middleware {
  /**
   * validates user sign up inputs
   * @param {object} req
   * @param {object} res
   * @param {callback} next
   */
  static validateSignUp(req, res, next) {
    req.check('firstName', 'First Name is required').notEmpty().trim();
    req.check('lastName', 'Last Name is required').notEmpty().trim();
    req.check('phone', 'The phone number is required').notEmpty().trim()
      .isLength({ minb: 11 })
      .withMessage('Enter a valid phone number');
    req.check('password', 'Password is required')
      .notEmpty().trim().isLength({ min: 6 })
      .withMessage('password cannot be less then 6 characters');
    req.check('email', 'Email is required').notEmpty().isEmail()
      .withMessage('Invalid email');

    const errors = req.validationErrors();
    if (errors) {
      return res.status(400).json({
        errors: extractErrors(errors),
        status: 400,
      });
    }
    return next();
  }
}
