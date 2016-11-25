module.exports = abbreviateName

function abbreviateName(string, lastnames=1) {
  lastnames = lastnames + 1

  const names = string.trim().split(' ');
  const substring = names.splice(1, names.length - lastnames).join(' ')
  const abbreviation = substring.split(' ').map(abbreviate).join(' ')

  return string.replace(substring, abbreviation)

  function abbreviate(name) {
    const prepositions = [
      'de',
      'da',
      'dos',
      'das',
      'el',
    ]

    const isPreposition = prepositions.indexOf(name) >= 0

    return isPreposition
      ? name
      : `${name.charAt(0)}.`
  }
}

