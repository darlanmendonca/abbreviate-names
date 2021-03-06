module.exports = abbreviateLastnames

function abbreviateLastnames(string, lastnames=1) {
  lastnames = lastnames + 1
  const names = string.trim().replace(/[\s]{1,}/g, ' ').split(' ');

  if (names.length > 2) {
    const substring = names.splice(1, names.length - lastnames).join(' ')
    const abbreviation = substring.split(' ').map(abbreviate).join(' ')

    return string.replace(substring, abbreviation)
  } else {
    return string
  }

  function abbreviate(name) {
    const prepositions = [
      'de',
      'do',
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

