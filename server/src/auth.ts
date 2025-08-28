import jwt from "jsonwebtoken";

const SECRET_KEY = "Hello";

interface UserPayload {
  _id: string;
  fullName: string;
  email: string;
}
export const userSign = ({ _id, fullName, email }: UserPayload): string => {
  const payload = { _id: _id, fullName: fullName, email: email };
  const token = jwt.sign(payload, SECRET_KEY);
  return token;
};

export const userVerify = (token: string): UserPayload | null => {
  if (!token) return null;
  try {
    const data = jwt.verify(token, SECRET_KEY);
    return data as UserPayload;
  } catch (error) {
    return null;
  }
};
