import validate from 'validate.js';
import helpers from '../helpers/Helpers';

export default class AccountValidator {
  static validateBankCreation(req, res, next) {
    const { accountType } = req.body;

    if (!validate.isString(accountType) || validate.isEmpty(accountType)) {
      return res.status(400).send({
        status: 400,
        error: 'account type is required and must be a string',
      });
    }
    if (accountType.toLowerCase() === 'savings' || accountType.toLowerCase() === 'current') {
      return next();
    }
    return res.status(400).send({
      status: 400,
      error: 'account type must be either savings or current',
    });
  }

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

  static validateStatus(req, res, next) {
    const { accountStatus } = req.body;

    if (!validate.isString(accountStatus) || validate.isEmpty(accountStatus)) {
      return res.status(400).send({
        status: 400,
        error: 'account status is required and must be a string',
      });
    }
    if (accountStatus.toLowerCase() === 'active' || accountStatus.toLowerCase() === 'dormant') {
      return next();
    }
    return res.status(400).send({
      status: 400,
      error: 'account status must be either active or dormant',
    });
  }
}
