export const valid = {
  nickname: (word) => {
    return word.length >= 2;
  },

  email: (email) => {
    return /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i.test(email);
  },

  password: (password) => {
    return password.length >= 8;
  },
};
