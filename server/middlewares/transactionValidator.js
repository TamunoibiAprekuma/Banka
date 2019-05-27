// import validate from 'validate.js';
import helpers from '../helpers/Helpers';

export default class AccountValidator {
  static validateParam(req, res, next) {
    req.checkParams('accountId', 'The account ID must be a number').notEmpty().isInt();
    const errors = req.validationErrors();
    if (errors) {
      return res.status(400).json({
        status: 400,
        errors: helpers.extractErrors(errors),
      });
    }
    return next();
  }

  static validateAmount(req, res, next) {
    req.checkBody('amount', 'The amount must be a number').notEmpty().trim()
      .isNumeric()
      .withMessage('The amount must be a number');
    const errors = req.validationErrors();
    if (errors) {
      return res.status(400).json({
        status: 400,
        errors: helpers.extractErrors(errors),
      });
    }
    return next();
  }
}
