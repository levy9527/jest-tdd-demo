module.exports = function(filename) {
  let index = filename.indexOf(".sh");
  return index > -1 && index != 0;
};
