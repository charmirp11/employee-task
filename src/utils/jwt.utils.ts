import dotenv from 'dotenv';
import { sign, verify } from 'jsonwebtoken';
dotenv.config();
/**
 * generates JWT used for local testing
 */
export const generateToken = () => {
  // information to be encoded in the JWT
  const payload = {
    name: 'Charmi Patel',
    userId: 1,
    accessTypes: ['getEmployees', 'addEmployees'],
  };

  const privateKey: any = process.env.SECRET_KEY;
  return sign(payload, privateKey, { expiresIn: '1h' });
};

interface TokenPayload {
  exp: number;
  accessTypes: string[];
  name: string;
  userId: number;
}

/**
 * checks if JWT token is valid
 *
 * @param token the expected token payload
 */
export const validateToken = (token: string): Promise<TokenPayload> => {
  const publicKey: any = process.env.SECRET_KEY;
  return new Promise((resolve, reject) => {
    verify(token, publicKey, (err: any, decoded: any) => {
      if (err) {
        reject(err);
      }
      resolve(decoded);
    });
  });
};
