module.exports = function(filename) {
  let index = filename.lastIndexOf(".");
  return !filename.startsWith('.')  && filename.substr(index) == '.sh';
};
