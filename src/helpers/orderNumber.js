const orderNumber = (number) => {
  const numSplit = number.toString().split("");

  if (numSplit.length === 1) {
    numSplit.unshift("#00");
    return numSplit.join("");
  } else if (numSplit.length === 2) {
    numSplit.unshift("#0");
    return numSplit.join("");
  } else if (numSplit.length === 3) {
    numSplit.unshift("#0");
    return numSplit.join("");
  } else {
    return numSplit.join("");
  }
};

export default orderNumber;
