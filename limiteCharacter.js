function limiteCharacter(character, minimum = 2, maximum = 30) {
  let isValid = false

  if (character.length >= minimum && character.length <= maximum) isValid = true

  return isValid
}

module.exports = { limiteCharacter }
