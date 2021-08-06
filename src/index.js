module.exports = function check(str, config) {
  let brackets = str;
  let count = 0;

  while (brackets) {
    for (let i = 0; i < config.length; i++) {
      brackets = brackets.split(config[i].join("")).join("");
    }

    count++;
    if (count > str.length / 2) return false;
  }

  return true;
};
