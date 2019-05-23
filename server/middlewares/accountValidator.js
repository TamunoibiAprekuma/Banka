import validate from 'validate.js';

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
}
