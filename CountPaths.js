const GenerateMatrix = n => {
  let matrix = [];

  for(let i = 0; i < n; i++){
    let row = [];
    for(let j = 0; j < n; j++){
      if(i > j){
        row.push(-1)
      }else{
        row.push(0);
      }
    }
    matrix.push(row);
  }
  return matrix
}
const NumberOfPaths = (matrix, row=0, col=0) => {
  if(row === matrix.length-1 && col === matrix.length-1){
    return 1;
  }

  let right = 0,
    down = 0;

  if(row !== matrix.length-1 && matrix[row+1][col] !== -1){
    right = NumberOfPaths(matrix, row+1, col);
  }

  if(col !== matrix.length-1 && matrix[row][col+1] !== -1){
    down = NumberOfPaths(matrix, row, col+1);
  }

  return right + down;
}
NumberOfPaths(GenerateMatrix(10));