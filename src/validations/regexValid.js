export const checkEmail = text => {
  const email_regex = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
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
  var re = new RegExp(/^.{6,7}$/);

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
