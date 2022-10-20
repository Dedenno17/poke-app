const choosenColorType = (color) => {
  let choosenColor;

  switch (color) {
    case "bug":
      choosenColor = "#27cb50";
      break;
    case "grass":
      choosenColor = "#27cb50";
      break;
    case "steel":
      choosenColor = "#27cb50";
      break;
    case "dark":
      choosenColor = "#906791";
      break;
    case "poison":
      choosenColor = "#906791";
      break;
    case "ghost":
      choosenColor = "#906791";
      break;
    case "dragon":
      choosenColor = "#62cad9";
      break;
    case "ice":
      choosenColor = "#62cad9";
      break;
    case "water":
      choosenColor = "#62cad9";
      break;
    case "flying":
      choosenColor = "#62cad9";
      break;
    case "electric":
      choosenColor = "#FFB200";
      break;
    case "fairy":
      choosenColor = "#fd4b5a";
      break;
    case "fire":
      choosenColor = "#fd4b5a";
      break;
    case "psychic":
      choosenColor = "#fd4b5a";
      break;
    case "ground":
      choosenColor = "#8b3e22";
      break;
    case "rock":
      choosenColor = "#8b3e22";
      break;
    case "fighting":
      choosenColor = "#ef6239";
      break;
    case "normal":
      choosenColor = "#8b3e22";
      break;
    default:
      choosenColor = "#dcdee0";
  }

  return choosenColor;
};

export default choosenColorType;
