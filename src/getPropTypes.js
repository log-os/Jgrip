// function to get the
function getPropTypes(fileData, miningPos) {
  let string = '';

  for (let i = miningPos, count = 0; i < fileData.length; i += 1) {
    if (fileData.charCodeAt(i) !== 10 && fileData.charCodeAt(i) !== 32) {
      if (
        count === 1
        &&
        (fileData[i] === '}' || fileData[i] === ':' || fileData[i] === ',')
      ) {
        string += '"';
      }

      string += fileData[i];

      if (
        (count === 0 && fileData[i] === '{')
        ||
        (count === 1 && (fileData[i] === ':' || fileData[i] === ','))
      ) {
        string += '"';
      }
    }

    if (fileData[i] === '{') {
      count += 1;
    } else if (fileData[i] === '}') {
      count -= 1;
      if (count === 0) break;
    }
  }
  return JSON.parse(string);
}

export default getPropTypes;
