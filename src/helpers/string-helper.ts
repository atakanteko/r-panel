const isEmailValid = (email: string): boolean => {
  const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
  return typeof email === 'string' && email.match(emailRegex) !== null;
};

export const StringHelper = {
  isEmailValid,
};
