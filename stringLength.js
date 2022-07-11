const stringLength = (str) => {
  if (str.length > 0 && str.length <= 10) {
    return str.length;
  } else {
    throw new Error(
      'String must be greater than 0 and less than or equal to 10'
    );
  }
};

module.exports = stringLength;
