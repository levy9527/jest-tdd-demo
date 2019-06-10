module.exports = function(filename) {
  let index = filename.indexOf(".sh");
  return !filename.startsWith('.')  && index > -1;
};
