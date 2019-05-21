import Authenticator from '../helpers/Authenticator';
import userModel from '../models/userModel';

const { generateToken } = Authenticator;


const { create } = userModel;
export default class UserController {
  static async createAccount(req, res) {
    let user;

    try {
      user = create(req, res);
      const { id } = user;
      const token = await generateToken({ id });
      user.token = token;

      return res.status(201).json({
        status: 201,
        data: user,
      });
    } catch (err) {
      return res.status(500).json({
        error: true,
        message: 'Unable to create user account',
      });
    }
  }

  static async loginUser(req, res) {
    const { email, password } = req.body;
    const sqlQuery = 'SELECT * FROM users WHERE email = $1';
    const values = [email];
    let user;
    const client = await pool.connect();
    try {
      user = await client.query({ text: sqlQuery, values });
      if (user.rows && user.rowCount) {
        user = user.rows[0];
        if (passwordHash.verify(password, user.password)) {
          const { id, isadmin } = user;
          const token = await generateToken({ id, isadmin });
          return res.status(200).json({ data: [{ token, user }], message: 'Login successful' });
        }
        return res.status(401).json({ error: true, message: 'Invalid email or password' });
      }
      return res.status(401).json({ error: true, message: 'Invalid email or password' });
    } catch (err) {
      return res.status(500).json({ error: true, message: 'Internal server error' });
    } finally {
      client.release();
    }
  }
}
