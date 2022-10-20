const firstCapitalLetter = (str) => {
  const strSplit = str.split("");

  const firstLetter = strSplit.slice(0, 1);
  const letterAfter = strSplit.slice(1, strSplit.length);

  const upperFirstLetter = firstLetter[0].toUpperCase();
  letterAfter.unshift(upperFirstLetter);

  return letterAfter.join("");
};

export default firstCapitalLetter;
