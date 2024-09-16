import { scryptSync, randomBytes, timingSafeEqual } from 'crypto';

function hashWithSalt(key: string): string {
  const salt = randomBytes(16).toString('hex');

  const hashKey = scryptSync(key, salt, 64).toString('hex');
  return `${salt}:${hashKey}`;
}

class User {
  private name: string;
  private hash: string;
  private salt: string;

  constructor(name: string, key: string) {
    this.name = name;

    const [salt, hash] = hashWithSalt(key).split(':');
    this.salt = salt;
    this.hash = hash;
  }

  authenticate(name: string, key: string): boolean {
    const isNameValid = name === this.name;

    if (isNameValid) {
      const testHash = scryptSync(key, this.salt, 64);
      const realHash = Buffer.from(this.hash, 'hex');

      const isHashValid = timingSafeEqual(realHash, testHash);

      if (isHashValid) {
        console.log('Authentication successful');
        return true;
      }
    }
    console.log('Authentication failed');
    return false;
  }
}

const user = new User('cezar', '123');

console.log(user);
console.log(user.authenticate('cezar', '123'));
