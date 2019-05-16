import passwordHash from 'password-hash';
// import authentication from '../helpers/authenticate';

// const { regex } = helpers;
// const { encode, decode } = authentication;

/* This class contains the logic for Users */

class UserController {
  /**
* @description - this method creates a user
*
* @param {object} req - The request payload sent to the router
* @param {object} res - The response payload sent back from the controller
*
* @returns {object} - status message and response
*/
  // eslint-disable-next-line consistent-return
  static async signUp(req, res) {
    const client = await pool.connect();
    try {
      const { username, email, password } = req.body;
      const hashedPassword = passwordHash.generate(password.trim());
      const signUpUserQuery = { text: 'INSERT INTO users(email, username, password) VALUES($1, $2, $3) RETURNING id, email, username, registered, lastlogin', values: [email.trim(), username.trim(), hashedPassword] };
      const user = await client.query(signUpUserQuery);
      const { rows } = user;
      if (rows) {
        const token = encode(rows[0].id, rows[0].isadmin);
        await notification.signUp(email);
        return res.status(201).send({ status: 201, data: [{ token, user: rows[0] }], message: 'Registration was successfull' });
      } return res.status(204).send({ status: 204, error: 'User account not created, try again' });
    } catch (err) {
      const { constraint } = err;
      if (constraint === 'users_email_key') { res.status(409).send({ status: 409, error: 'Email already exists' }); } else if (constraint === 'users_username_key') { res.status(409).send({ status: 409, error: 'Username already exists' }); } else { return res.status(500).send({ status: 500, error: 'Internal server error' }); }
    } finally { await client.release(); }
  }
}

export default UserController;
