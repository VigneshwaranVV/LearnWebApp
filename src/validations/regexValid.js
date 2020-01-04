export const checkEmail = text => {
  // eslint-disable-next-line
  const email_regex = /^\w+([\.-]?\w+)+@\w+([\.:]?\w+)+(\.[a-zA-Z0-9]{2,3})+$/
  if (text) return email_regex.test(text);
  return false;
};
export const isEmpty = text => {
  const isEmpty_regex = /([^\s])/;
  if (text) return isEmpty_regex.test(text);
  return false;
};

export const isMinMaxLength = (text, minLength = 0, maxLength = 0) => {
  const isMinMaxLength_regex = /^.{6,7}$/;

  if (minLength === 0 || maxLength === 0) {
    if (maxLength === 0) {
      // "".replace(re)
    }
    if (minLength === 0) {
    }
  }
  if (text) return isMinMaxLength_regex.test(text);
  return false;
};
