import jwt from 'jsonwebtoken';

const secretKey: string = 'superSecretKey';

const token = jwt.sign(
  {
    surname: 'cezar',
    course: 'security with ts',
  },
  secretKey
);

console.log(token);

const decodeToken = jwt.verify(token, secretKey);

console.log(decodeToken);
