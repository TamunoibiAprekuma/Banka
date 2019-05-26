import AccountModel from '../models/accountModel';

const { create, modify } = AccountModel;

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
    !  Steps
    1. Get the accountId
    2. Change the status of the account.status from old status to new status
      1. Query the data
    3. Push the new status to account.status

    ! Stopped
    valdiateStatus of the account controller validation */
  }
}

/*
FIXME:  Account creation
1. This route is to be restricted to only customers but now both staffs can access the route.
  My qustion is when generating a token can I pass in the fact that the account created is a user
  If not how would I check the token to know if the account created is a user account.
  Current mode   :  generateToken({ id, isAdmin })
  suggested mode :  generateToken({ id, isAdmin, type })

FIXME:  userslogin and user signup
1. What particulars are to be return to the user.
   Sample response:
            {
        "status": 201,
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
    } */
