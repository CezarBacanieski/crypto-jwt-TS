import {
  createSign,
  createVerify,
  generateKeyPairSync,
  Sign,
  Verify,
} from 'crypto';

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

let data: string = 'this string will be signed';

const signer: Sign = createSign('rsa-sha256');

signer.update(data);

data += 'arquivo alterado';

const signature = signer.sign(privateKey, 'hex');

console.log('Signature:', signature);

const verify: Verify = createVerify('rsa-sha256');

verify.update(data);

const isVerify = verify.verify(publicKey, signature, 'hex');

console.log(isVerify);

