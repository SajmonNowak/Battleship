const createNearbyCoordinates = (pos) => {
  const getRevTop = (coordinate) => {
    return [coordinate - 11, coordinate - 10, coordinate - 9];
  };
  const getRevLeft = (coordinate) => {
    return [coordinate - 11, coordinate - 1, coordinate + 9];
  };
  const getRevBottom = (coordinate) => {
    return [coordinate + 9, coordinate + 10, coordinate + 11];
  };
  const getRevRight = (coordinate) => {
    return [coordinate - 9, coordinate + 1, coordinate + 11];
  };

  const isTop = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  const isLeft = [0, 10, 20, 30, 40, 50, 60, 70, 80, 90];
  const isBot = [90, 91, 92, 93, 94, 95, 96, 97, 98, 99];
  const isRight = [9, 19, 29, 39, 49, 59, 69, 79, 89, 99];

  const getType = (coordinate) => {
    let cellType = [];
    if (isTop.includes(coordinate)) {
      cellType.push("top");
    }
    if (isLeft.includes(coordinate)) {
      cellType.push("left");
    }
    if (isBot.includes(coordinate)) {
      cellType.push("bot");
    }
    if (isRight.includes(coordinate)) {
      cellType.push("right");
    }
    return cellType;
  };

  let nearbyCoordinates = [];

  pos.forEach((coordinate) => {
    let type = getType(coordinate);
    nearbyCoordinates.push(
      ...getRevTop(coordinate),
      ...getRevLeft(coordinate),
      ...getRevRight(coordinate),
      ...getRevBottom(coordinate)
    );
    if (type.includes("top")) {
      nearbyCoordinates = nearbyCoordinates.filter(
        (e) => !getRevTop(coordinate).includes(e)
      );
    }
    if (type.includes("bot")) {
      nearbyCoordinates = nearbyCoordinates.filter(
        (e) => !getRevBottom(coordinate).includes(e)
      );
    }
    if (type.includes("left")) {
      nearbyCoordinates = nearbyCoordinates.filter(
        (e) => !getRevLeft(coordinate).includes(e)
      );
    }
    if (type.includes("right")) {
      nearbyCoordinates = nearbyCoordinates.filter(
        (e) => !getRevRight(coordinate).includes(e)
      );
    }
  });

  const finalArray = [];
  nearbyCoordinates.forEach((e) => {
    if (finalArray.includes(e) || pos.includes(e)) {
      return;
    }
    finalArray.push(e);
  });

  return finalArray;
};

export default createNearbyCoordinates;
