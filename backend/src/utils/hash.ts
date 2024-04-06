import crypto from 'crypto';

const hash = (
  input: string,
  salt: string | null = null
): { hashedValue: string; salt: string } => {
  const _salt =
    salt === null || salt.trim().length === 0
      ? crypto.randomBytes(16).toString('hex')
      : salt;

  const hashedValue = crypto
    .createHash('sha256')
    .update(input + _salt)
    .digest('hex');

  return { hashedValue, salt: _salt };
};

export default hash;
