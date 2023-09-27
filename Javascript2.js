function sortStringAlphabetically(inputString) {
    return inputString.split('').sort().join('');
  }
  
  let input = 'webmaster';
  let sortedString = sortStringAlphabetically(input);
  console.log(sortedString);
  