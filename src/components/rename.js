function renamePerc(num) {
  if (num < 0) {
    return ["fas fa-caret-down", "-" + String(Math.abs(num))];
  } else {
    return ["fas fa-caret-up", "+" + String(num)];
  }
}

function renameNum(num) {
  if (num >= 10000) {
    return String(parseInt(num / 1000)) + "k";
  } else {
    return num;
  }
}

export default renamePerc;
export { renameNum };
