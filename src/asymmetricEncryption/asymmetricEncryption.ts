import { generateKeyPairSync, privateDecrypt, publicEncrypt } from 'crypto';

const { privateKey, publicKey } = generateKeyPairSync('rsa', {
  modulusLength: 2048,

  publicKeyEncoding: {
    type: 'spki',
    format: 'pem',
  },
  privateKeyEncoding: {
    type: 'pkcs8',
    format: 'pem',
  },
});

const cryptedData: Buffer = publicEncrypt(
  publicKey,
  Buffer.from('Super secret message')
);

const decryptedData: Buffer = privateDecrypt(privateKey, cryptedData);

console.log(decryptedData.toString());

// console.log(publicKey);
// console.log(privateKey);
