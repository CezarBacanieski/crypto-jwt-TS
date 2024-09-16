const secretMessage: string = 'mysecretmessage';

console.log(secretMessage);

function encryptMessage(message: string, movements: number): string {
  const encryptedMessage = message.split('').map((character) => {
    const characterCode = character.charCodeAt(0);
    return String.fromCharCode(characterCode + movements);
  });

  return encryptedMessage.join('');
}

function decryptMessage(message: string, movements: number): string {
  const decryptedMessage = message.split('').map((character) => {
    const characterCode = character.charCodeAt(0);
    return String.fromCharCode(characterCode - movements);
  });

  return decryptedMessage.join('');
}

const encryptedMessage = encryptMessage(secretMessage, 3);
const decryptedMessage = decryptMessage(encryptedMessage, 3);

console.log('Encrypted Message:', encryptedMessage);
console.log('Decrypted Message:', decryptedMessage);
