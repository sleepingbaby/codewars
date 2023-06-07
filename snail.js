snail = function (array) {
  if (array[0].length < 1) {
    return [];
  }

  let snail = [];

  let startRow = 0;
  let endRow = array.length - 1;
  let startCol = 0;
  let endCol = array[0].length - 1;

  while (startRow <= endRow && startCol <= endCol) {
    for (let i = startCol; i <= endCol; i++) {
      snail.push(array[startRow][i]);
    }
    startRow++;
    for (let i = startRow; i <= endRow; i++) {
      snail.push(array[i][endCol]);
    }
    endCol--;
    if (startRow <= endRow) {
      for (let i = endCol; i >= startCol; i--) {
        snail.push(array[endRow][i]);
      }
      endRow--;
    }

    if (startCol <= endCol) {
      for (let i = endRow; i >= startRow; i--) {
        snail.push(array[i][startCol]);
      }
      startCol++;
    }
  }

  return snail;
};
