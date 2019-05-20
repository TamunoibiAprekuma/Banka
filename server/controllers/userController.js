import Authenticator from '../helpers/Authenticator';
import userModel from '../models/userModel';

const { generateToken } = Authenticator;


const { create } = userModel;
export default class UserController {
  static async createAccount(req, res) {
    let user;

    try {
      user = create(req, res);
      console.log(Array.isArray(user));
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
}
