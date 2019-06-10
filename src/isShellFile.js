export default function(filename) {
  return !filename.startsWith('.')  && filename.substr(filename.lastIndexOf(".")) == '.sh';
};
