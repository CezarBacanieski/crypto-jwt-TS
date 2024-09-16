import {
  createCipheriv,
  randomBytes,
  createDecipheriv,
  Decipher,
} from 'crypto';

const message: string = 'I am a senior software engineer';

const key: Buffer = randomBytes(32);

const iv: Buffer = randomBytes(16);

const cipher = createCipheriv('aes-256-cbc', key, iv);

const encryptedMessage: string =
  cipher.update(message, 'utf-8', 'hex') + cipher.final('hex');

console.log('Encrypted Message:', encryptedMessage);

const decipher: Decipher = createDecipheriv('aes-256-cbc', key, iv);

const decryptedMessage: string =
  decipher.update(encryptedMessage, 'hex', 'utf-8') + decipher.final('utf-8');

console.log('Decrypted Message:', decryptedMessage);
