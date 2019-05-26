import AccountModel from '../models/accountModel';

const { create, modify, remove } = AccountModel;

export default class AccountController {
  static createBankAccount(req, res) {
    let account;


    try {
      account = create(req, res);
      return res.status(201).json({
        status: 201,
        data: account,
      });
    } catch (err) {
      return res.status(500).json({
        status: 500,
        error: 'Internal server error Unable to create new Bank account',
      });
    }
  }

  static modifyAccountStatus(req, res) {
    let account;


    try {
      account = modify(req, res);
      return res.status(200).json({
        status: 200,
        data: account,
      });
    } catch (err) {
      return res.status(500).json({
        status: 500,
        error: 'Internal server error Unable to create new Bank account',
      });
    }

    /*
      Steps
    1. Get the accountId
    2. Change the status of the account.status from old status to new status
      1. Query the data
    3. Push the new status to account.status

    ! Stopped
    valdiateStatus of the account controller validation */
  }

  static deleteBankAccount(req, res) {
    try {
      const message = remove(req, res);

      return res.status(200).json({
        status: 200,
        message,
      });
    } catch (err) {
      return res.status(500).json({
        status: 500,
        error: 'Internal server error Unable to create new Bank account',
      });
    }
  }
}

/*
FIXME:  Account creation
1. Route Protection
This route is to be restricted to only customers but now both staffs can access the route.
  My qustion is when generating a token can I pass in the fact that the account created is a user
  If not how would I check the token to know if the account created is a user account.
  Current mode   :  generateToken({ id, isAdmin })
  suggested mode :  generateToken({ id, isAdmin, type })

FIXME: DELETE /accounts/<account-number>
1. Route Protection
This route is to be restricted to type = staff. Both admin and staff
Right now it is only acessible to only admin = true

2. Can't set headers after they are sent
This issue is when you search if the accountExits and return 404 response. The problem with
this response cycle does not terminate but continues and the next function is also being called immediately afterwards and attempts to set the header again
HACK: You could use a middleware that validates that the userExists or that then no need to send 404 response

FIXME: PATCH /account/<account-number>
Current response spec
          "data": {
              "id": 1,
              "accountNumber": 222010771,
              "owner": 1,
              "type": "savings",
              "status": "active",
              "balance": 20000.95,
              "dateCreated": "2019-05-26T11:36:43.428Z"
      }
Proper response data
          "data": {
              "accountNumber": 222010771,
              "status": "active",
          }
FIXME: POST /auth/signup and POST /auth/signin user login and user signup
Current response spec
        "data": {
            "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaXNBZG1pbiI6dHJ1ZSwiaWF0IjoxNTU4ODU5NTE1LCJleHAiOjE1NTg4NzAzMTV9.sR0TzIImThp7zQzwIXUSJ2zQlSKoxirlwUdVS_REc8g",
            "id": 1,
            "email": "example@example.com",
            "firstName": "Tammy",
            "lastName": "Aprekuma",
            "password": "sha1$5beb0e94$1$f4d87ee93fc73d2d6ad39d6c8fcf2ea135c8e278",
            "type": "staff",
            "isAdmin": true
         }
Proper response data
        "data": {
            "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaXNBZG1pbiI6dHJ1ZSwiaWF0IjoxNTU4ODU5NTE1LCJleHAiOjE1NTg4NzAzMTV9.sR0TzIImThp7zQzwIXUSJ2zQlSKoxirlwUdVS_REc8g",
            "id": 1,
            "email": "example@example.com",
            "firstName": "Tammy",
            "lastName": "Aprekuma",
            "type": "staff",
            "isAdmin": true
         }
*/
