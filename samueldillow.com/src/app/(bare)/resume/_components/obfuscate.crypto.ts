import { createCipheriv, createDecipheriv } from 'crypto';

const KEY = 'lousy but simple encryption key!';
const IV = 'something simple';

export const encrypt = (text: string) => {
  const cipher = createCipheriv('aes-256-cbc', KEY, IV);
  return cipher.update(text, 'utf8', 'hex') + cipher.final('hex');
};

export const decrypt = (text: string) => {
  const decipher = createDecipheriv('aes-256-cbc', KEY, IV);
  return decipher.update(text, 'hex', 'utf8') + decipher.final('utf8');
};
