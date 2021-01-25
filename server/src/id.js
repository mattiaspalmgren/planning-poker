function id(length) {
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const getRandomChar = () => characters.charAt(Math.floor(Math.random() * characters.length));

  let idString = '';
  for (let i = 0; i < length; i++) {
    const char = getRandomChar();
    idString += char;
  }

  return idString;
}

module.exports = id;
