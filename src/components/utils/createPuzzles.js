export const createArray = () => {
  const nums = [];
  for (let i = 1; i <= 15; i++) nums.push(i);
  nums.push(0); // empty Index
  return nums;
};

export const neighborsOfEmpty = (emptyIndex) => {
  const emptyCol = emptyIndex % 4; // 0:left boundary, 3:right boundary
  const emptyRow = Math.floor(emptyIndex / 4); // 0: top boundary, 3: button boundary

  // find the empty's neighbors
  const neighbors = [];
  if (emptyRow > 0) neighbors.push(emptyIndex - 4); // 当数字不在第一行，上面的邻居为index-4
  if (emptyRow < 3) neighbors.push(emptyIndex + 4); // 当数字不在最后一行, 下面的邻居为index+4
  if (emptyCol > 0) neighbors.push(emptyIndex - 1); // 当数字不在第一列，左边的邻居为index-1
  if (emptyCol < 3) neighbors.push(emptyIndex + 1); //当数字不在最后一列，右边的邻居为index+1

  return neighbors;
};

const createRandomArray = (arr) => {
  const emptyIndex = arr.indexOf(0); // 0-15
  const neighborsArray = neighborsOfEmpty(emptyIndex);

  // 从邻居中随机找一个数作为nums的index和空格交换
  const randomNeighbor =
    neighborsArray[Math.floor(Math.random() * neighborsArray.length)];
  const newArr = [...arr];
  [newArr[emptyIndex], newArr[randomNeighbor]] = [
    newArr[randomNeighbor],
    newArr[emptyIndex],
  ];
  return newArr;
};
export const creatInitArr = () => {
  let randomArray = createArray();
  const random = Math.floor(Math.random() * 200) + 100;
  for (let i = 1; i < random; i++) {
    randomArray = createRandomArray(randomArray);
  }
  return randomArray;
};
