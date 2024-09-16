import { createHash } from 'crypto';

function keyHash(key: string): string {
  return createHash('sha256').update(key).digest('hex');
}

console.log(keyHash('#Carla1005#'));

class User {
  private name: string;
  private hash: string;

  constructor(name: string, key: string) {
    this.name = name;
    this.hash = keyHash(key);
  }

  authenticate(name: string, key: string): boolean {
    const isNameValid = name === this.name;
    const isKeyValid = this.hash === keyHash(key);

    if (isNameValid && isKeyValid) {
      console.log('Authentication successful');
      return true;
    }

    console.log('Authentication failed');
    return false;
  }
}

const user = new User('Cezar', '#Carla1005#');

console.log(user.authenticate('Cezar', '#Carla1005#'));
