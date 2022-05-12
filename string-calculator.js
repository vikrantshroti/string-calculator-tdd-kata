function stringCalculator(numberString) {
  // returning 0 if empty string is passed or only 1 parameter is passed
  if (numberString === "" || numberString.length <= 1) {
    return 0;
  }
  const delimiter = getDelimiter(numberString);
  const formattedInput = formatInput(numberString);
  return calculateSum(getNumbers(formattedInput, delimiter));
}

// function to manipulate input in number string
function formatInput(input) {
  const delimiterRegExp = /^(\/\/.*\n)/;
  const matches = delimiterRegExp.exec(input);
  if (matches && matches.length > 0) {
    return input.replace(delimiterRegExp, "");
  }
  return input;
}

// function to manipulate regex on input
function getDelimiter(input) {
  const delimiters = [];
  const multipleDelimiterRegexp = /(?:^\/\/)?\[([^\[\]]+)\]\n?/g;
  let matches = multipleDelimiterRegexp.exec(input);
  while (matches !== null) {
    delimiters.push(matches[1]);
    matches = multipleDelimiterRegexp.exec(input);
  }
  if (delimiters.length > 0) {
    return new RegExp("[" + delimiters.join("") + "]");
  }
  matches = /^\/\/(.*)\n/.exec(input);
  if (matches && matches[1]) {
    return matches[1];
  }
  return /[\n,]/;
}

// function to get number after delimiter is applied on string
function getNumbers(string, delimiter) {
  return string
    .split(delimiter)
    .filter((n) => n !== "")
    .map((n) => parseInt(n));
}

// actual addition of number and throwing of error on negatives
function calculateSum(numbers) {
  const negatives = [];
  const finalSum = numbers.reduce((sum, n) => {
    if (n > 1000) {
      return 0;
    }
    if (n < 0) {
      negatives.push(n);
      return 0;
    }
    return sum + n;
  }, 0);
  if (negatives.length > 0) {
    throw new Error("Negatives not allowed: " + negatives.join(","));
  }
  return finalSum;
}

export default stringCalculator;
