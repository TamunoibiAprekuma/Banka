import Helpers from '../helpers/Helpers';


import userModel from '../models/userModel';

const { extractErrors } = Helpers;
const { getUser } = userModel;


export default class AuthValidator {
  /**
   * validates user sign up inputs
   * @param {object} req - The request entered by the user.
   * @param {object} res - The response sent to the user is error if validation fails
   * @param {callback} next - The next middleware is called if validation is successful
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

  static async userExists(req, res, next) {
    const { email } = req.body;
    const user = await getUser(email);
    if (user) {
      return res.status(409).json({ error: true, message: 'User already exists' });
    }
    return next();
  }


  static validateLogin(req, res, next) {
    req.check('email', 'Email is required').notEmpty().isEmail().trim()
      .withMessage('Invalid email');
    req.check('password', 'Password is required').notEmpty().trim();

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
